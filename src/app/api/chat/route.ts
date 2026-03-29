import { NextRequest, NextResponse } from 'next/server';

interface Attachment {
  name: string;
  type: string; // MIME type
  url: string;  // base64 data URL
  size: number;
}

interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderType: 'user' | 'company';
  text: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  attachment?: Attachment;
}

interface Conversation {
  id: string;
  userId: string;
  userName: string;
  companyId: string;
  companyName: string;
  lastMessage: string;
  lastMessageTime: string;
  userUnreadCount: number;
  companyUnreadCount: number;
  status: string;
  createdAt: string;
}

interface ChatStore {
  conversations: Conversation[];
  messages: Message[];
}

// Server-side in-memory store — shared across ALL browser tabs/origins
const store: ChatStore = {
  conversations: [],
  messages: [],
};

function resetToDefaults() {
  const now = new Date().toISOString();
  store.conversations = [{
    id: 'conv_1',
    userId: '1',
    userName: 'Lokesh',
    companyId: '2',
    companyName: 'Himorix Company',
    lastMessage: 'Welcome to Himorix! Send us a message to start chatting.',
    lastMessageTime: now,
    userUnreadCount: 0,
    companyUnreadCount: 0,
    status: 'active',
    createdAt: now,
  }];
  store.messages = [{
    id: 'msg_init',
    conversationId: 'conv_1',
    senderId: '2',
    senderName: 'Himorix Company',
    senderType: 'company',
    text: 'Welcome to Himorix! Send us a message to start chatting.',
    timestamp: now,
    status: 'read',
  }];
}

// Initialize on first import
if (store.conversations.length === 0) {
  resetToDefaults();
}

export async function GET() {
  return NextResponse.json(store);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (body.action === 'reset') {
    resetToDefaults();
    return NextResponse.json({ ok: true, store });
  }

  // Called after signup — creates a conversation for the new user if it doesn't exist
  if (body.action === 'ensureConversation') {
    const { userId, userName } = body;
    const exists = store.conversations.find(c => c.userId === userId);
    if (!exists) {
      const convId = 'conv_' + userId;
      const now = new Date().toISOString();
      store.conversations.push({
        id: convId,
        userId,
        userName,
        companyId: '2',
        companyName: 'Himorix Company',
        lastMessage: 'Welcome to Himorix! Send us a message.',
        lastMessageTime: now,
        userUnreadCount: 1,
        companyUnreadCount: 0,
        status: 'active',
        createdAt: now,
      });
      store.messages.push({
        id: 'msg_welcome_' + userId,
        conversationId: convId,
        senderId: '2',
        senderName: 'Himorix Company',
        senderType: 'company',
        text: `Hi ${userName}! Welcome to Himorix. How can we help you today?`,
        timestamp: now,
        status: 'sent',
      });
    }
    return NextResponse.json({ ok: true });
  }

  if (body.action === 'send') {
    const { conversationId, senderId, senderName, senderType, text, attachment } = body;
    const newMsg: Message = {
      id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      conversationId,
      senderId,
      senderName,
      senderType,
      text: text || '',
      timestamp: new Date().toISOString(),
      status: 'sent',
      ...(attachment ? { attachment } : {}),
    };
    store.messages.push(newMsg);

    const conv = store.conversations.find(c => c.id === conversationId);
    if (conv) {
      conv.lastMessage = text || (attachment ? `📎 ${attachment.name}` : '');
      conv.lastMessageTime = newMsg.timestamp;
      if (senderType === 'user') conv.companyUnreadCount += 1;
      if (senderType === 'company') conv.userUnreadCount += 1;
    }
    return NextResponse.json({ ok: true, message: newMsg });
  }

  if (body.action === 'markRead') {
    const { conversationId, readerId } = body;
    const conv = store.conversations.find(c => c.id === conversationId);
    if (conv) {
      const role = readerId === conv.userId ? 'user' : 'company';
      if (role === 'user') conv.userUnreadCount = 0;
      if (role === 'company') conv.companyUnreadCount = 0;
      store.messages.forEach(m => {
        if (m.conversationId === conversationId && m.senderType !== role) {
          m.status = 'read';
        }
      });
    }
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
}

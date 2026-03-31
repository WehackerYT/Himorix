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
  store.conversations = [{
    id: 'conv_1',
    userId: '1',
    userName: 'Lokesh',
    companyId: '2',
    companyName: 'Himorix Company',
    lastMessage: 'Thank you for sharing this. I really appreciate the time and effort your team has invested in this research. Let me go through the proposal carefully and I will get back to you with an update shortly.',
    lastMessageTime: '2026-03-30T09:15:00.000Z',
    userUnreadCount: 0,
    companyUnreadCount: 0,
    status: 'active',
    createdAt: '2026-03-30T04:30:00.000Z',
  }];
  store.messages = [
    {
      id: 'msg_1',
      conversationId: 'conv_1',
      senderId: '2',
      senderName: 'Himorix Company',
      senderType: 'company',
      text: 'Hi Lokesh, hope you are doing well. I have something important to share with you today regarding the IISU University project.',
      timestamp: '2026-03-30T04:45:00.000Z',
      status: 'read',
    },
    {
      id: 'msg_2',
      conversationId: 'conv_1',
      senderId: '2',
      senderName: 'Himorix Company',
      senderType: 'company',
      text: 'Our team has spent the last 2 weeks doing in-depth research on this. We thoroughly explored every aspect of the requirements, the technical architecture, third-party integrations, and the overall scope before putting the final proposal together.',
      timestamp: '2026-03-30T04:47:00.000Z',
      status: 'read',
    },
    {
      id: 'msg_3',
      conversationId: 'conv_1',
      senderId: '2',
      senderName: 'Himorix Company',
      senderType: 'company',
      text: 'I want to sincerely apologize for the delay in getting this to you. As per our meeting yesterday, I understand you were expecting it sooner — but your CRM project is quite large in scope and complexity. We did not want to rush it and risk missing any critical details.',
      timestamp: '2026-03-30T04:49:00.000Z',
      status: 'read',
    },
    {
      id: 'msg_4',
      conversationId: 'conv_1',
      senderId: '2',
      senderName: 'Himorix Company',
      senderType: 'company',
      text: 'To be very honest with you Lokesh, at this price point I genuinely do not think you will find anyone in the market who would take on a project of this scale and deliver it with the quality and reliability we are committing to. We have kept our pricing extremely competitive while ensuring nothing is compromised.',
      timestamp: '2026-03-30T04:52:00.000Z',
      status: 'read',
    },
    {
      id: 'msg_5',
      conversationId: 'conv_1',
      senderId: '2',
      senderName: 'Himorix Company',
      senderType: 'company',
      text: 'Here is the complete proposal document. Please take your time to review it and let me know if you have any questions or need any clarifications.',
      timestamp: '2026-03-30T04:53:00.000Z',
      status: 'read',
      attachment: {
        name: 'Himorix - IISU PROPOSAL.pdf',
        type: 'application/pdf',
        url: '#',
        size: 2048576,
      },
    },
    {
      id: 'msg_6',
      conversationId: 'conv_1',
      senderId: '1',
      senderName: 'Lokesh',
      senderType: 'user',
      text: 'Thank you for sharing this. I really appreciate the time and effort your team has invested in this research. Let me go through the proposal carefully and I will get back to you with an update shortly.',
      timestamp: '2026-03-30T09:15:00.000Z',
      status: 'read',
    },
  ];
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

// FINAL ULTIMATE HIGH-RELIABILITY CHAT SERVICE V100
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderType: 'user' | 'company';
  text: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

export interface Conversation {
  id: string;
  userId: string;
  userName: string;
  companyId: string;
  companyName: string;
  lastMessage: string;
  lastMessageTime: string;
  userUnreadCount: number;
  companyUnreadCount: number;
  status: 'active' | 'pending' | 'resolved';
  createdAt: string;
  userType?: 'user' | 'company'; 
  assignedTo?: string; 
  unreadCount?: number; 
}

class ChatService {
  private STORAGE_KEY = 'himorix_chat_v100';
  private SYNC_CHANNEL = 'himorix_sync_v100';
  private channel: BroadcastChannel | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.ensureInitialized();
      try {
        this.channel = new BroadcastChannel(this.SYNC_CHANNEL);
        console.log('ChatService: Channel Ready');
      } catch (e) {
        console.error('ChatService: Channel Failed', e);
      }
    }
  }

  private ensureInitialized() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) {
      this.resetToDefaults();
    }
  }

  private getData() {
    if (typeof window === 'undefined') return { conversations: [], messages: [] };
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (!data) return { conversations: [], messages: [] };
    try {
      return JSON.parse(data);
    } catch (e) {
      return { conversations: [], messages: [] };
    }
  }

  private saveData(conversations: Conversation[], messages: Message[]) {
    if (typeof window === 'undefined') return;
    const data = { conversations, messages };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    this.channel?.postMessage('sync');
    window.dispatchEvent(new Event('storage'));
  }

  public resetToDefaults() {
    const conversations: Conversation[] = [{
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
      userType: 'user'
    }];

    const messages: Message[] = [
      {
        id: 'msg_1',
        conversationId: 'conv_1',
        senderId: '2',
        senderName: 'Himorix Company',
        senderType: 'company',
        text: 'Hi Lokesh, hope you are doing well. I have something important to share with you today regarding the IISU University project.',
        timestamp: '2026-03-30T04:45:00.000Z',
        status: 'read'
      },
      {
        id: 'msg_2',
        conversationId: 'conv_1',
        senderId: '2',
        senderName: 'Himorix Company',
        senderType: 'company',
        text: 'Our team has spent the last 2 weeks doing in-depth research on this. We thoroughly explored every aspect of the requirements, the technical architecture, third-party integrations, and the overall scope before putting the final proposal together.',
        timestamp: '2026-03-30T04:47:00.000Z',
        status: 'read'
      },
      {
        id: 'msg_3',
        conversationId: 'conv_1',
        senderId: '2',
        senderName: 'Himorix Company',
        senderType: 'company',
        text: 'I want to sincerely apologize for the delay in getting this to you. As per our meeting yesterday, I understand you were expecting it sooner — but your CRM project is quite large in scope and complexity. We did not want to rush it and risk missing any critical details.',
        timestamp: '2026-03-30T04:49:00.000Z',
        status: 'read'
      },
      {
        id: 'msg_4',
        conversationId: 'conv_1',
        senderId: '2',
        senderName: 'Himorix Company',
        senderType: 'company',
        text: 'To be very honest with you Lokesh, at this price point I genuinely do not think you will find anyone in the market who would take on a project of this scale and deliver it with the quality and reliability we are committing to. We have kept our pricing extremely competitive while ensuring nothing is compromised.',
        timestamp: '2026-03-30T04:52:00.000Z',
        status: 'read'
      },
      {
        id: 'msg_5',
        conversationId: 'conv_1',
        senderId: '2',
        senderName: 'Himorix Company',
        senderType: 'company',
        text: 'Here is the complete proposal document. Please take your time to review it and let me know if you have any questions or need any clarifications.',
        timestamp: '2026-03-30T04:53:00.000Z',
        status: 'read'
      },
      {
        id: 'msg_6',
        conversationId: 'conv_1',
        senderId: '1',
        senderName: 'Lokesh',
        senderType: 'user',
        text: 'Thank you for sharing this. I really appreciate the time and effort your team has invested in this research. Let me go through the proposal carefully and I will get back to you with an update shortly.',
        timestamp: '2026-03-30T09:15:00.000Z',
        status: 'read'
      },
    ];

    this.saveData(conversations, messages);
  }

  getConversationsForUser(userId: string, role: 'user' | 'company'): Conversation[] {
    const { conversations } = this.getData();
    const filtered = role === 'user' 
      ? conversations.filter((c: Conversation) => c.userId === userId)
      : conversations.filter((c: Conversation) => c.companyId === userId);

    return filtered.map((c: Conversation) => ({
      ...c,
      unreadCount: role === 'user' ? (c.userUnreadCount || 0) : (c.companyUnreadCount || 0)
    }));
  }

  getMessagesForConversation(conversationId: string): Message[] {
    const { messages } = this.getData();
    return messages
      .filter((m: Message) => m.conversationId === conversationId)
      .sort((a: Message, b: Message) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  }

  sendMessage(conversationId: string, senderId: string, senderName: string, senderType: 'user' | 'company', text: string): Message {
    const { conversations, messages } = this.getData();
    const newMessage: Message = {
      id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      conversationId,
      senderId,
      senderName,
      senderType,
      text,
      timestamp: new Date().toISOString(),
      status: 'sent'
    };

    const newConversations = conversations.map((c: Conversation) => {
      if (c.id === conversationId) {
        return {
          ...c,
          lastMessage: text,
          lastMessageTime: newMessage.timestamp,
          companyUnreadCount: senderType === 'user' ? (c.companyUnreadCount || 0) + 1 : c.companyUnreadCount,
          userUnreadCount: senderType === 'company' ? (c.userUnreadCount || 0) + 1 : c.userUnreadCount
        };
      }
      return c;
    });

    this.saveData(newConversations, [...messages, newMessage]);
    return newMessage;
  }

  markMessagesAsRead(conversationId: string, readerId: string) {
    const { conversations, messages } = this.getData();
    let changed = false;
    const conv = conversations.find((c: Conversation) => c.id === conversationId);
    if (!conv) return;

    const role = readerId === conv.userId ? 'user' : 'company';
    const newConversations = conversations.map((c: Conversation) => {
      if (c.id === conversationId) {
        if (role === 'user' && (c.userUnreadCount || 0) > 0) { changed = true; return { ...c, userUnreadCount: 0 }; }
        if (role === 'company' && (c.companyUnreadCount || 0) > 0) { changed = true; return { ...c, companyUnreadCount: 0 }; }
      }
      return c;
    });

    const newMessages = messages.map((m: Message) => {
      if (m.conversationId === conversationId && m.senderType !== role && m.status !== 'read') {
        changed = true;
        return { ...m, status: 'read' };
      }
      return m;
    });

    if (changed) this.saveData(newConversations, newMessages);
  }

  subscribe(callback: () => void) {
    if (typeof window === 'undefined') return () => {};
    const handleUpdate = () => {
      console.log('ChatService: Sync Update');
      callback();
    };
    window.addEventListener('storage', handleUpdate);
    this.channel?.addEventListener('message', handleUpdate);
    return () => {
      window.removeEventListener('storage', handleUpdate);
      this.channel?.removeEventListener('message', handleUpdate);
    };
  }
}

export const chatService = new ChatService();

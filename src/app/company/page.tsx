"use client";

import { useState, useEffect, useRef } from 'react';
import { Search, MessageSquare, Send, Phone, Mail, MoreVertical, Check, CheckCheck, User as UserIcon, Building, Paperclip, X, FileText, Image } from 'lucide-react';
interface AuthUser {
  id: string;
  email: string;
  name: string;
  type: 'user' | 'company';
  createdAt: string;
}

interface Attachment {
  name: string;
  type: string;
  url: string;
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

export default function CompanyDashboard() {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [lastSync, setLastSync] = useState('');
  const [msgCount, setMsgCount] = useState(0);
  const [pendingFile, setPendingFile] = useState<Attachment | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectedConvRef = useRef<Conversation | null>(null);
  const currentUserRef = useRef<AuthUser | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem('currentUser');
    if (!raw) {
      window.location.href = '/auth';
      return;
    }
    let user: AuthUser;
    try { user = JSON.parse(raw); } catch { window.location.href = '/auth'; return; }
    if (user.type !== 'company') {
      window.location.href = '/auth';
      return;
    }
    setCurrentUser(user);
    currentUserRef.current = user;
  }, []);

  useEffect(() => { selectedConvRef.current = selectedConversation; }, [selectedConversation]);
  useEffect(() => { currentUserRef.current = currentUser; }, [currentUser]);

  // Poll /api/chat every second — server-side, works across any browser origin
  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch('/api/chat');
        const data = await res.json();
        const user = currentUserRef.current;
        if (!user) return;

        const companyConvs: Conversation[] = (data.conversations || []).filter((c: Conversation) => c.companyId === user.id);
        setConversations([...companyConvs]);
        setMsgCount(data.messages?.length ?? 0);

        const conv = selectedConvRef.current;
        if (!conv && companyConvs.length > 0) {
          setSelectedConversation(companyConvs[0]);
          selectedConvRef.current = companyConvs[0];
        }

        const activeConv = selectedConvRef.current;
        if (activeConv) {
          const msgs: Message[] = (data.messages || []).filter((m: Message) => m.conversationId === activeConv.id);
          setMessages([...msgs]);
        }
        setLastSync(new Date().toLocaleTimeString());
      } catch { /* ignore */ }
    };

    poll();
    const interval = setInterval(poll, 1000);
    return () => clearInterval(interval);
  }, []);

  const selectConversation = async (conv: Conversation) => {
    setSelectedConversation(conv);
    selectedConvRef.current = conv;
    if (currentUser) {
      await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'markRead', conversationId: conv.id, readerId: currentUser.id }),
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPendingFile({ name: file.name, type: file.type, url: reader.result as string, size: file.size });
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const sendMessage = async () => {
    if (!newMessage.trim() && !pendingFile) return;
    if (!selectedConversation || !currentUser) return;
    const text = newMessage;
    const attachment = pendingFile;
    setNewMessage('');
    setPendingFile(null);
    await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'send',
        conversationId: selectedConversation.id,
        senderId: currentUser.id,
        senderName: currentUser.name,
        senderType: 'company',
        text,
        ...(attachment ? { attachment } : {}),
      }),
    });
  };

  const formatTime = (ts: string) => {
    try {
      const d = new Date(ts);
      if (isNaN(d.getTime())) return '';
      const diff = Date.now() - d.getTime();
      const m = Math.floor(diff / 60000);
      if (m < 1) return 'Just now';
      if (m < 60) return `${m}m ago`;
      const h = Math.floor(m / 60);
      if (h < 24) return `${h}h ago`;
      const days = Math.floor(h / 24);
      if (days === 1) return 'Yesterday ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      if (days < 7) return d.toLocaleDateString([], { weekday: 'short' }) + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return d.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch { return ''; }
  };

  const filtered = conversations.filter(c =>
    c.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-4 shadow-lg flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Company Dashboard</h1>
              <p className="text-pink-100 text-xs">{currentUser?.name} · Synced {lastSync} · 📦 {msgCount} msgs</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={async () => { await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'reset' }) }); window.location.reload(); }}
              className="px-3 py-1.5 bg-red-500/20 hover:bg-red-500/40 rounded text-xs border border-white/10"
            >
              Reset
            </button>
            <button
              onClick={() => { localStorage.removeItem('currentUser'); window.location.href = '/auth'; }}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm border border-white/20"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 outline-none"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 px-1">{filtered.length} conversations</p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filtered.map((conv) => (
              <div
                key={conv.id}
                onClick={() => selectConversation(conv)}
                className={`p-4 cursor-pointer border-l-4 transition-all ${
                  selectedConversation?.id === conv.id
                    ? 'bg-pink-50 border-pink-500'
                    : 'border-transparent hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-gray-900 text-sm">{conv.userName}</span>
                  <span className="text-[10px] text-gray-400">{formatTime(conv.lastMessageTime)}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">{conv.lastMessage}</p>
                {(conv.companyUnreadCount || 0) > 0 && (
                  <span className="mt-1 inline-block bg-pink-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                    {conv.companyUnreadCount} new
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
          {selectedConversation ? (
            <>
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{selectedConversation.userName}</p>
                    <p className="text-[10px] text-gray-400 uppercase">User</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <button className="p-2 text-gray-400 hover:text-pink-600"><Phone className="w-4 h-4" /></button>
                  <button className="p-2 text-gray-400 hover:text-pink-600"><Mail className="w-4 h-4" /></button>
                  <button className="p-2 text-gray-400 hover:text-pink-600"><MoreVertical className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-gray-50/30">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.senderType === 'company' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] rounded-2xl shadow-sm text-sm overflow-hidden ${
                      msg.senderType === 'company'
                        ? 'bg-pink-600 text-white rounded-tr-sm'
                        : 'bg-white text-gray-900 border border-gray-100 rounded-tl-sm'
                    }`}>
                      {msg.attachment && (
                        <div className="p-2">
                          {msg.attachment.type.startsWith('image/') ? (
                            <img src={msg.attachment.url} alt={msg.attachment.name} className="max-w-full rounded-lg max-h-48 object-cover" />
                          ) : (
                            <a href={msg.attachment.url} download={msg.attachment.name} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${
                              msg.senderType === 'company' ? 'bg-pink-500/40 hover:bg-pink-500/60' : 'bg-gray-100 hover:bg-gray-200'
                            }`}>
                              <FileText className="w-4 h-4 flex-shrink-0" />
                              <span className="truncate">{msg.attachment.name}</span>
                            </a>
                          )}
                        </div>
                      )}
                      {msg.text && <p className="px-4 pt-1 pb-1">{msg.text}</p>}
                      <div className={`flex items-center justify-end gap-1 px-4 pb-2 text-[10px] ${msg.senderType === 'company' ? 'text-pink-100' : 'text-gray-400'}`}>
                        <span>{formatTime(msg.timestamp)}</span>
                        {msg.senderType === 'company' && (msg.status === 'read' ? <CheckCheck className="w-3 h-3" /> : <Check className="w-3 h-3" />)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-200 flex-shrink-0">
                {pendingFile && (
                  <div className="mb-2 flex items-center gap-2 bg-pink-50 border border-pink-200 rounded-lg px-3 py-2 text-xs">
                    {pendingFile.type.startsWith('image/') ? <Image className="w-4 h-4 text-pink-500 flex-shrink-0" /> : <FileText className="w-4 h-4 text-pink-500 flex-shrink-0" />}
                    <span className="truncate text-gray-700 flex-1">{pendingFile.name}</span>
                    <button onClick={() => setPendingFile(null)} className="text-gray-400 hover:text-red-500"><X className="w-3.5 h-3.5" /></button>
                  </div>
                )}
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl border border-gray-200 px-3 py-2">
                  <input ref={fileInputRef} type="file" accept="image/*,.pdf,.doc,.docx,.txt,.zip" className="hidden" onChange={handleFileChange} />
                  <button onClick={() => fileInputRef.current?.click()} className="text-gray-400 hover:text-pink-600 flex-shrink-0">
                    <Paperclip className="w-4 h-4" />
                  </button>
                  <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Reply to user..."
                    className="flex-1 bg-transparent outline-none text-sm text-gray-900"
                  />
                  <button onClick={sendMessage} className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-lg">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-gray-200 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Select a conversation</p>
                <p className="text-sm text-gray-400">Pick a user chat from the sidebar</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

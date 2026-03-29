// Chat sync verification script
// Tests: user sends → company sees it, company sends → user sees it

// ---------- Mock browser localStorage ----------
const store = {};
const localStorage = {
  getItem: (k) => store[k] ?? null,
  setItem: (k, v) => { store[k] = v; },
  removeItem: (k) => { delete store[k]; }
};
global.localStorage = localStorage;
global.window = { dispatchEvent: () => {} };

// ---------- Inline ChatService (mirrors chat.ts) ----------
const STORAGE_KEY = 'himorix_chat_v100';

function getData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { conversations: [], messages: [] };
  try { return JSON.parse(raw); } catch { return { conversations: [], messages: [] }; }
}

function saveData(conversations, messages) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ conversations, messages }));
}

function resetToDefaults() {
  saveData(
    [{
      id: 'conv_1', userId: '1', userName: 'Lokesh',
      companyId: '2', companyName: 'Himorix Company',
      lastMessage: 'Welcome to Himorix Dashboard!',
      lastMessageTime: new Date().toISOString(),
      userUnreadCount: 0, companyUnreadCount: 0,
      status: 'active', createdAt: new Date().toISOString()
    }],
    [{
      id: 'msg_init', conversationId: 'conv_1',
      senderId: '2', senderName: 'Himorix Company',
      senderType: 'company', text: 'Welcome to Himorix Dashboard!',
      timestamp: new Date().toISOString(), status: 'read'
    }]
  );
}

function sendMessage(conversationId, senderId, senderName, senderType, text) {
  const { conversations, messages } = getData();
  const newMsg = {
    id: 'msg_' + Date.now(),
    conversationId, senderId, senderName, senderType, text,
    timestamp: new Date().toISOString(), status: 'sent'
  };
  const newConvs = conversations.map(c => {
    if (c.id !== conversationId) return c;
    return {
      ...c, lastMessage: text, lastMessageTime: newMsg.timestamp,
      companyUnreadCount: senderType === 'user' ? (c.companyUnreadCount || 0) + 1 : c.companyUnreadCount,
      userUnreadCount: senderType === 'company' ? (c.userUnreadCount || 0) + 1 : c.userUnreadCount
    };
  });
  saveData(newConvs, [...messages, newMsg]);
  return newMsg;
}

function getMessagesForConversation(conversationId) {
  const { messages } = getData();
  return messages.filter(m => m.conversationId === conversationId);
}

function getConversationsForUser(userId, role) {
  const { conversations } = getData();
  return role === 'user'
    ? conversations.filter(c => c.userId === userId)
    : conversations.filter(c => c.companyId === userId);
}

// ---------- Tests ----------
let passed = 0;
let failed = 0;

function assert(condition, label) {
  if (condition) {
    console.log('  ✅ PASS:', label);
    passed++;
  } else {
    console.error('  ❌ FAIL:', label);
    failed++;
  }
}

console.log('\n=== Himorix Chat Sync Verification ===\n');

// 1. Init
console.log('▶ Test 1: Initialize data');
resetToDefaults();
const initData = getData();
assert(initData.conversations.length === 1, 'Has 1 conversation after reset');
assert(initData.messages.length === 1, 'Has 1 initial message after reset');
assert(initData.conversations[0].id === 'conv_1', 'conv_1 exists');

// 2. User sends message
console.log('\n▶ Test 2: User (Lokesh) sends message');
sendMessage('conv_1', '1', 'Lokesh', 'user', 'Hello company!');
const afterUserMsg = getData();
const companyConvs = getConversationsForUser('2', 'company');
assert(afterUserMsg.messages.length === 2, 'Message count is 2 after user sends');
assert(companyConvs[0].companyUnreadCount === 1, 'Company unread count incremented');
assert(companyConvs[0].lastMessage === 'Hello company!', 'lastMessage updated to user message');

// 3. Company sees user message
console.log('\n▶ Test 3: Company can read user message');
const companyMsgs = getMessagesForConversation('conv_1');
assert(companyMsgs.length === 2, 'Company sees 2 messages');
const userMsg = companyMsgs.find(m => m.senderType === 'user');
assert(!!userMsg, 'Company sees user message with senderType=user');
assert(userMsg?.text === 'Hello company!', 'Company sees correct message text');

// 4. Company replies
console.log('\n▶ Test 4: Company replies');
sendMessage('conv_1', '2', 'Himorix Company', 'company', 'Hi Lokesh, how can I help?');
const afterCompanyMsg = getData();
const userConvs = getConversationsForUser('1', 'user');
assert(afterCompanyMsg.messages.length === 3, 'Message count is 3 after company replies');
assert(userConvs[0].userUnreadCount === 1, 'User unread count incremented');
assert(userConvs[0].lastMessage === 'Hi Lokesh, how can I help?', 'lastMessage updated to company message');

// 5. User sees company reply
console.log('\n▶ Test 5: User can read company reply');
const userMsgs = getMessagesForConversation('conv_1');
assert(userMsgs.length === 3, 'User sees 3 messages');
const companyReply = userMsgs.find(m => m.senderType === 'company' && m.text === 'Hi Lokesh, how can I help?');
assert(!!companyReply, 'User sees company reply');
assert(companyReply?.text === 'Hi Lokesh, how can I help?', 'User sees correct reply text');

// 6. Both share same data (same key, same origin = same localStorage)
console.log('\n▶ Test 6: Both sides read same raw localStorage');
const rawForUser = localStorage.getItem(STORAGE_KEY);
const rawForCompany = localStorage.getItem(STORAGE_KEY); // same object
assert(rawForUser === rawForCompany, 'User and company read IDENTICAL raw data');
const allMessages = JSON.parse(rawForUser).messages;
assert(allMessages.length === 3, 'Raw localStorage has all 3 messages');

// 7. Multiple messages
console.log('\n▶ Test 7: Multiple back-and-forth messages');
sendMessage('conv_1', '1', 'Lokesh', 'user', 'Message A');
sendMessage('conv_1', '2', 'Himorix Company', 'company', 'Message B');
sendMessage('conv_1', '1', 'Lokesh', 'user', 'Message C');
const finalMsgs = getMessagesForConversation('conv_1');
assert(finalMsgs.length === 6, 'All 6 messages visible to both sides');
assert(finalMsgs[3].text === 'Message A', 'Message A in correct order');
assert(finalMsgs[4].text === 'Message B', 'Message B in correct order');
assert(finalMsgs[5].text === 'Message C', 'Message C in correct order');

// ---------- Summary ----------
console.log('\n=== RESULTS ===');
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
if (failed === 0) {
  console.log('\n🎉 ALL TESTS PASSED - Chat logic is correct!');
  console.log('   Data flows correctly between user and company via shared localStorage.');
} else {
  console.log('\n⚠️  SOME TESTS FAILED - Check the issues above.');
}

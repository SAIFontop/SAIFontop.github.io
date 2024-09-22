let currentChat = 'chat1';
const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('user-input');

const chats = {
    chat1: [],
    chat2: []
};

function openChat(chatId) {
    currentChat = chatId;
    renderMessages();
}

function addNewChat() {
    const newChatId = `chat${Object.keys(chats).length + 1}`;
    chats[newChatId] = [];
    const tabButton = document.createElement('button');
    tabButton.innerText = `دردشة ${Object.keys(chats).length}`;
    tabButton.onclick = () => openChat(newChatId);
    document.querySelector('.tabs').appendChild(tabButton);
    openChat(newChatId);
}

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    chats[currentChat].push({ sender: 'أنت', message });
    userInput.value = '';
    renderMessages();

    setTimeout(() => {
        const botResponse = generateResponse(message);
        chats[currentChat].push({ sender: 'الذكاء الاصطناعي', message: botResponse });
        renderMessages();
    }, 1000);
}

function renderMessages() {
    messagesDiv.innerHTML = '';
    chats[currentChat].forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');

        const senderSpan = document.createElement('span');
        senderSpan.classList.add(msg.sender === 'أنت' ? 'user' : 'bot');
        senderSpan.textContent = msg.sender;

        const messageContentDiv = document.createElement('div');
        messageContentDiv.classList.add('message-content');
        messageContentDiv.textContent = msg.message;

        messageDiv.appendChild(senderSpan);
        messageDiv.appendChild(messageContentDiv);
        messagesDiv.appendChild(messageDiv);
    });
}

function generateResponse(message) {
    return `رد الذكاء الاصطناعي: ${message}`;
}

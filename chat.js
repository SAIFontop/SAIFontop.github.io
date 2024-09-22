const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage('أنت', message, 'user');
    userInput.value = '';

    setTimeout(() => {
        const botResponse = generateResponse(message);
        addMessage('الذكاء الاصطناعي', botResponse, 'bot');
    }, 1000);
}

function addMessage(sender, message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);

    const senderSpan = document.createElement('span');
    senderSpan.classList.add('sender');
    senderSpan.textContent = sender;

    const messageContent = document.createElement('p');
    messageContent.classList.add('content');
    messageContent.textContent = message;

    messageDiv.appendChild(senderSpan);
    messageDiv.appendChild(messageContent);

    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function generateResponse(message) {
    return `تلقيت رسالتك: ${message}`;
}

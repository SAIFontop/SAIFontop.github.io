const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage('أنت', message, 'user');
    userInput.value = '';

    // Simulate AI response after a short delay
    setTimeout(() => {
        const botResponse = generateResponse(message);
        addMessage('الذكاء الاصطناعي', botResponse, 'bot');
    }, 1000);
}

function addMessage(sender, message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${type}-message`);

    const senderSpan = document.createElement('span');
    senderSpan.classList.add(type);
    senderSpan.textContent = sender;

    const messageContentDiv = document.createElement('div');
    messageContentDiv.classList.add('message-content');
    messageContentDiv.textContent = message;

    messageDiv.appendChild(senderSpan);
    messageDiv.appendChild(messageContentDiv);
    messagesDiv.appendChild(messageDiv);

    // Scroll to the bottom of the messages div
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function generateResponse(message) {
    return 'رد الذكاء الاصطناعي على رسالتك: ' + message;
}

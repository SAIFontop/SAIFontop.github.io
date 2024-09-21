const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    if (message.trim() === '') return;

    addMessage('أنت', message);
    userInput.value = '';

    setTimeout(() => {
        const response = generateResponse(message);
        addMessage('الذكاء الاصطناعي', response);
    }, 1000);
}

function addMessage(sender, message) {
    const newMessage = document.createElement('div');
    newMessage.textContent = `${sender}: ${message}`;
    messagesDiv.appendChild(newMessage);
}

function generateResponse(message) {
    return 'هذا رد افتراضي للرسالة: ' + message;
}

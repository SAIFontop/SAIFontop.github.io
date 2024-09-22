const sendMessageBtn = document.getElementById('sendMessageBtn');
const messageInput = document.getElementById('messageInput');
const chatBox = document.getElementById('chatBox');

sendMessageBtn.addEventListener('click', () => {
    sendMessage();
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message === "") return;

    // إضافة رسالة المستخدم
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.innerText = message;
    chatBox.appendChild(userMessage);

    messageInput.value = "";

    // إضافة رد الذكاء الاصطناعي (مثال فقط)
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.innerText = "رد الذكاء الاصطناعي على رسالتك!";
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

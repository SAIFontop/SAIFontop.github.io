document.getElementById('sendMessageBtn').addEventListener('click', sendMessage);

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    
    if (messageText) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('user-message');
        messageDiv.textContent = messageText;

        document.getElementById('chatBox').appendChild(messageDiv);
        messageInput.value = ''; // تفريغ حقل الإدخال
    }
}

document.getElementById('sendMessageBtn').addEventListener('click', sendMessage);

// تحميل الرسائل المحفوظة عند تحميل الصفحة
window.onload = function() {
    const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    savedMessages.forEach(message => {
        displayMessage(message);
    });
};

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    
    if (messageText) {
        const message = { text: messageText };
        displayMessage(message);

        // حفظ الرسالة في localStorage
        let chatMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        chatMessages.push(message);
        localStorage.setItem('chatMessages', JSON.stringify(chatMessages));

        messageInput.value = ''; // تفريغ حقل الإدخال
    }
}

function displayMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('user-message');
    messageDiv.textContent = message.text;
    document.getElementById('chatBox').appendChild(messageDiv);
}

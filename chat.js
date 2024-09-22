const messagesDiv = document.querySelector('.chat-box');
const userInput = document.querySelector('.message-input input');
const sendButton = document.querySelector('.btn-send');

sendButton.addEventListener('click', async () => {
    const userMessage = userInput.value;
    if (!userMessage) return;

    // عرض الرسالة في الدردشة
    addMessage(userMessage, 'user');

    // تنظيف حقل الإدخال
    userInput.value = '';

    // استدعاء الذكاء الاصطناعي من OpenAI API
    const botResponse = await getAIResponse(userMessage);

    // عرض الرد من الذكاء الاصطناعي
    addMessage(botResponse, 'bot');
});

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // للتمرير لأسفل
}

async function getAIResponse(message) {
    const apiKey = 'YOUR_OPENAI_API_KEY'; // ضع مفتاح الـ API هنا
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'text-davinci-003', // أو يمكنك استخدام نموذج آخر
            prompt: message,
            max_tokens: 150
        })
    });
    const data = await response.json();
    return data.choices[0].text.trim();
}

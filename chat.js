// قم بتغيير هذا المفتاح الخاص بـ OpenAI API Key إلى المفتاح الخاص بك
const apiKey = "sk-1k4aQirG66ZkAgYcdhILkOUsxw902aZCE0vkjcEwauT3BlbkFJtWDAbTzxAHqgyhWAZ9L53PRDLZuzTXUVJfcq-w3Q8A"; 

// الدردشة الحالية
let currentChat = [];

// دالة لإضافة الرسائل إلى الدردشة
function addMessageToChat(sender, message) {
    const chats = document.getElementById("chats");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    if (sender === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("bot-message");
    }
    messageDiv.textContent = message;
    chats.appendChild(messageDiv);
    chats.scrollTop = chats.scrollHeight; // قم بالتمرير إلى أسفل الدردشة تلقائيًا
}

// دالة لإرسال الرسالة إلى OpenAI API
function sendMessageToAPI(message) {
    const url = "https://api.openai.com/v1/completions";
    const data = {
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 150
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}` // تأكد من وجود "Bearer" قبل الـ API Key
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = data.choices && data.choices[0] ? data.choices[0].text.trim() : "No response";
        addMessageToChat("bot", botMessage);
    })
    .catch(error => {
        console.error("Error:", error);
        addMessageToChat("bot", "Error: Unable to get a response from the server.");
    });
}

// دالة للتعامل مع إدخال المستخدم
function handleUserMessage() {
    const userInput = document.getElementById("userInput");
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    // أضف الرسالة إلى الدردشة
    addMessageToChat("user", userMessage);

    // أرسل الرسالة إلى OpenAI API
    sendMessageToAPI(userMessage);

    // مسح حقل الإدخال بعد الإرسال
    userInput.value = "";
}

// عند الضغط على زر الإرسال
document.getElementById("sendButton").addEventListener("click", handleUserMessage);

// عند الضغط على "Enter" في حقل الإدخال
document.getElementById("userInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleUserMessage();
    }
});


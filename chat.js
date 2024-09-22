document.getElementById("sendBtn").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("messageInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = document.getElementById("messageInput").value;
    if (userMessage.trim() === "") {
        return;
    }

    // عرض الرسالة في واجهة المستخدم
    addMessageToChatBox("أنت", userMessage);

    // إرسال الرسالة إلى API
    fetchOpenAIResponse(userMessage);

    // تفريغ الحقل بعد الإرسال
    document.getElementById("messageInput").value = "";
}

function addMessageToChatBox(sender, message) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function fetchOpenAIResponse(message) {
    const apiKey = "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"; // ضع المفتاح الخاص بك هنا
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }]
        })
    })
    .then(response => response.json())
    .then(data => {
        const botResponse = data.choices[0].message.content;
        addMessageToChatBox("الدردشة", botResponse);
    })
    .catch(error => {
        addMessageToChatBox("خطأ", "Error: Unable to get a response from the server.");
        console.error("Error:", error);
    });
}

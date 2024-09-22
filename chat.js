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

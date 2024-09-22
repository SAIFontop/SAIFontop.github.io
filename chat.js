// Chat functionality with OpenAI API integration
const apiKey = "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";

document.getElementById("sendMessage").addEventListener("click", function() {
    const userMessage = document.getElementById("userMessage").value;
    if (userMessage.trim() !== "") {
        addMessageToChat("user", userMessage);
        sendMessageToAPI(userMessage);
        document.getElementById("userMessage").value = "";
    }
});

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

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
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = data.choices[0].text.trim();
        addMessageToChat("bot", botMessage);
    })
    .catch(error => {
        console.error("Error:", error);
        addMessageToChat("bot", "Error: Unable to get a response from the server.");
    });
}

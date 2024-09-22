const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage('أنت', message, 'user');
  userInput.value = '';

  setTimeout(() => {
    const botResponse = generateResponse(message);
    addMessage('الذكاء الاصطناعي', botResponse, 'bot');
  }, 1000);
}

function addMessage(sender, message, type) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', type);

  const senderSpan = document.createElement('span');
  senderSpan.textContent = sender;

  const messageContentDiv = document.createElement('div');
  messageContentDiv.textContent = message;

  messageDiv.appendChild(senderSpan);
  messageDiv.appendChild(messageContentDiv);
  messagesDiv.appendChild(messageDiv);

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function generateResponse(message) {
  return `رد الذكاء الاصطناعي: ${message}`;
}

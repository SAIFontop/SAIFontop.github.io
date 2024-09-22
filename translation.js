// تعريف النصوص باللغتين
const translations = {
    ar: {
        chatTitle: 'الدردشة الذكية',
        placeholder: 'اكتب رسالتك هنا...',
        sendButton: 'إرسال',
        discordButton: 'انضم إلى ديسكورد'
    },
    en: {
        chatTitle: 'Smart Chat',
        placeholder: 'Type your message here...',
        sendButton: 'Send',
        discordButton: 'Join Discord'
    }
};

// عناصر الصفحة التي سيتم ترجمتها
const chatTitle = document.querySelector('.chat-title');
const messageInput = document.getElementById('messageInput');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const discordBtn = document.querySelector('.discord-btn');

// وظائف تغيير اللغة
document.getElementById('ar').addEventListener('click', () => {
    changeLanguage('ar');
});

document.getElementById('en').addEventListener('click', () => {
    changeLanguage('en');
});

// وظيفة تغيير اللغة
function changeLanguage(lang) {
    chatTitle.textContent = translations[lang].chatTitle;
    messageInput.placeholder = translations[lang].placeholder;
    sendMessageBtn.textContent = translations[lang].sendButton;
    discordBtn.textContent = translations[lang].discordButton;
}

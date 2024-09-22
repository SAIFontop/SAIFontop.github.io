const translations = {
    ar: {
        chat_title: 'الدردشة الذكي',
        send_button: 'إرسال',
        input_placeholder: 'اكتب رسالتك هنا...'
    },
    en: {
        chat_title: 'Smart Chat',
        send_button: 'Send',
        input_placeholder: 'Type your message here...'
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        el.textContent = translations[lang][el.getAttribute('data-translate')];
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        el.placeholder = translations[lang][el.getAttribute('data-translate-placeholder')];
    });
}

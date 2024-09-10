// دالة لإرسال رابط الموافقة إلى البريد الإلكتروني
function sendLoginLink(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const email = document.getElementById("emailInput").value;
    const loginMessage = document.getElementById("loginMessage");

    // تحقق من صحة البريد الإلكتروني (بشكل بسيط)
    if (!validateEmail(email)) {
        loginMessage.innerHTML = '<p style="color: red;">Invalid email address. Please try again.</p>';
        return;
    }

    // طلب لإرسال رابط البريد الإلكتروني (هنا تحتاج لخدمة مثل SendGrid أو Mailgun)
    // هذا مثال باستخدام Fetch API. ستحتاج لإعداد خدمة فعلية لإرسال البريد الإلكتروني
    fetch('/send-login-link', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send email.');
        }
        return response.json();
    })
    .then(data => {
        loginMessage.innerHTML = '<p style="color: green;">Login link sent! Check your email.</p>';
    })
    .catch(error => {
        loginMessage.innerHTML = '<p style="color: red;">Error sending login link. Please try again.</p>';
    });
}

// دالة للتحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// دالة لتسجيل المستخدم
function registerUser(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const registerMessage = document.getElementById("registerMessage");

    // تحقق من صحة البريد الإلكتروني وكلمة المرور (بشكل بسيط)
    if (!validateEmail(email) || password.length < 6) {
        registerMessage.innerHTML = '<p style="color: red;">Invalid email or password (min 6 characters). Please try again.</p>';
        return;
    }

    // إرسال البيانات إلى الخادم (إذا كنت تستخدم قاعدة بيانات)
    fetch('/register', { // افتراض أنك ستستخدم API للتسجيل
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Registration failed.');
        }
        return response.json();
    })
    .then(data => {
        registerMessage.innerHTML = '<p style="color: green;">Registration successful! Welcome to 911 Family.</p>';
    })
    .catch(error => {
        registerMessage.innerHTML = `<p style="color: red;">${error.message}. Please try again.</p>`;
    });
}

// دالة لتسجيل الدخول
function sendLoginLink(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const loginMessage = document.getElementById("loginMessage");

    if (!validateEmail(email)) {
        loginMessage.innerHTML = '<p style="color: red;">Invalid email address. Please try again.</p>';
        return;
    }

    // إرسال طلب تسجيل الدخول (يمكن أن يكون هذا إلى API)
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed.');
        }
        return response.json();
    })
    .then(data => {
        loginMessage.innerHTML = '<p style="color: green;">Login link sent! Check your email.</p>';
    })
    .catch(error => {
        loginMessage.innerHTML = `<p style="color: red;">${error.message}. Please try again.</p>`;
    });
}

// دالة للتحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

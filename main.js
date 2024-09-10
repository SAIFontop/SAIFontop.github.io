// قائمة المستخدمين، سيتم تخزين البيانات بشكل مؤقت هنا
let users = [];
let ownerEmail = null;  // متغير لتخزين البريد الإلكتروني للأونر

// دالة تسجيل المستخدم الجديد
function registerUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const registerMessage = document.getElementById("registerMessage");

    // التحقق من وجود المستخدم مسبقًا
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        registerMessage.innerHTML = '<p style="color: red;">User with this email already exists.</p>';
        return;
    }

    // إضافة المستخدم الجديد
    users.push({ email, username, password, role: users.length === 0 ? 'owner' : 'user' });

    // تعيين أول مستخدم كأونر
    if (users.length === 1) {
        ownerEmail = email;
    }

    registerMessage.innerHTML = `<p style="color: green;">Registration successful! Welcome, ${username}.</p>`;
}

// دالة تسجيل الدخول
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    // التحقق من وجود المستخدم
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        loginMessage.innerHTML = '<p style="color: red;">Invalid email or password.</p>';
        return;
    }

    // التحقق إذا كان المستخدم هو الأونر
    if (user.email === ownerEmail) {
        loginMessage.innerHTML = `<p style="color: green;">Welcome back, ${user.username} (Owner).</p>`;
    } else {
        loginMessage.innerHTML = `<p style="color: green;">Welcome back, ${user.username}.</p>`;
    }
}

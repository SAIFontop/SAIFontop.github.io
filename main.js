// قائمة المستخدمين، سيتم تخزين البيانات بشكل مؤقت هنا
let users = [];
let ownerID = null;  // متغير لتخزين ID الأونر

// دالة تسجيل المستخدم الجديد
function registerUser(event) {
    event.preventDefault();

    const discordID = document.getElementById("discordID").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const registerMessage = document.getElementById("registerMessage");

    // التحقق من وجود المستخدم مسبقًا
    const existingUser = users.find(user => user.discordID === discordID);

    if (existingUser) {
        registerMessage.innerHTML = '<p style="color: red;">User with this Discord ID already exists.</p>';
        return;
    }

    // إضافة المستخدم الجديد
    users.push({ discordID, username, password, role: users.length === 0 ? 'owner' : 'user' });

    // تعيين أول مستخدم كأونر
    if (users.length === 1) {
        ownerID = discordID;
    }

    registerMessage.innerHTML = `<p style="color: green;">Registration successful! Welcome, ${username}.</p>`;
}

// دالة تسجيل الدخول
function handleLogin(event) {
    event.preventDefault();

    const discordID = document.getElementById("discordID").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    // التحقق من وجود المستخدم
    const user = users.find(u => u.discordID === discordID && u.password === password);

    if (!user) {
        loginMessage.innerHTML = '<p style="color: red;">Invalid Discord ID or password.</p>';
        return;
    }

    // التحقق إذا كان المستخدم هو الأونر
    if (user.discordID === ownerID) {
        loginMessage.innerHTML = `<p style="color: green;">Welcome back, ${username} (Owner).</p>`;
    } else {
        loginMessage.innerHTML = `<p style="color: green;">Welcome back, ${username}.</p>`;
    }
}

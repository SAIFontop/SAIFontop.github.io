// script.js

// تحقق من تسجيل الدخول
function isLoggedIn() {
    // هنا يجب عليك التحقق من حالة تسجيل الدخول من خلال الخادم (backend)
    return false; // تعيين إلى true إذا كان المستخدم مسجل الدخول
}

// توجيه المستخدم إذا لم يكن مسجلاً الدخول
function redirectTo(url) {
    if (!isLoggedIn()) {
        alert('Please login first to access this feature.');
        window.location.href = 'index.html';
    } else {
        window.location.href = url;
    }
}

// إعادة المستخدم إلى المكان الذي ضغط فيه بعد تسجيل الدخول
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // هنا يجب عليك إضافة الشيفرة للتحقق من تسجيل الدخول
        alert('Login successful! Redirecting back...');
        window.location.href = 'dashboard.html'; // يجب تحديث هذا العنوان بناءً على حالتك
    });

    // إضافة تفاعلية للزر Register
    const registerLink = document.querySelector('a[href="register.html"]');
    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Redirecting to registration page...');
        window.location.href = 'register.html';
    });
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // بيانات تسجيل الدخول
    if (username === "admin" && password === "12345") {
        window.location.href = "admin.html";
    } else {
        document.getElementById("error-message").textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
    }
});

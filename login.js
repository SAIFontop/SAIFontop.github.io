document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        window.location.href = "admin.html"; // تأكد من أن ملف admin.html موجود وأن الرابط صحيح
    } else {
        document.getElementById("error-message").textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
    }
});

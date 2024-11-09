document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "admin";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        window.location.href = "admin.html";
    } else {
        document.getElementById("error-message").textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
    }
});

function toggleAdminOptions() {
    const options = document.getElementById("admin-options");
    options.style.display = options.style.display === "none" ? "block" : "none";
}

function addPartner() {
    alert("ميزة إضافة شريك قيد التطوير.");
}

function managePartners() {
    alert("ميزة إدارة الشركاء قيد التطوير.");
}

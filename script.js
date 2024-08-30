// وظيفة التحكم في نموذج تسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع التحديث الافتراضي للصفحة

    // جلب قيم اسم المستخدم وكلمة المرور
    const username = event.target[0].value;
    const password = event.target[1].value;

    // التحقق من صحة بيانات تسجيل الدخول
    if (username === 'admin' && password === 'password') {
        alert('تم تسجيل الدخول بنجاح!');
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
    }
});

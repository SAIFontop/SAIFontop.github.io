const langButtons = document.querySelectorAll(".lang-btn");

langButtons.forEach(button => {
    button.addEventListener("click", () => {
        const lang = button.getAttribute("data-lang");
        // هنا تقوم بإضافة منطق ترجمة الصفحات بناءً على اللغة المختارة
        alert("تم تغيير اللغة إلى " + lang);
    });
});

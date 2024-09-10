// مفاتيح الـ API
const ipApiKey = "91cd8f313e5a8c"; // مفتاح API لمعلومات IP
const emailApiKey = "YOUR_EMAILREP_API_KEY"; // استبدل بمفتاح API لخدمة EmailRep.io

// دالة لعرض رسالة شكر
function showAlert() {
    alert("Thank you for your interest in 911 Family! Stay tuned for more updates.");
}

// دالة لإظهار القسم المطلوب وإخفاء الأقسام الأخرى
function showSection(sectionId) {
    // إخفاء جميع الأقسام
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("ip-info").style.display = "none";
    document.getElementById("email-info").style.display = "none";

    // إظهار القسم المطلوب بناءً على النقر
    document.getElementById(sectionId).style.display = "block";
}

// دالة للحصول على معلومات IP باستخدام ipinfo.io
function getIpInfo() {
    const ip = document.getElementById("ipInput").value; // جلب عنوان IP من الإدخال
    fetch(`https://ipinfo.io/${ip}?token=${ipApiKey}`) // إرسال طلب إلى API
        .then(response => {
            if (!response.ok) {
                throw new Error("Error fetching IP info."); // معالجة الأخطاء
            }
            return response.json();
        })
        .then(data => {
            // عرض البيانات على الصفحة
            document.getElementById("ipResult").innerHTML = `
                <p>IP: ${data.ip}</p>
                <p>City: ${data.city}</p>
                <p>Region: ${data.region}</p>
                <p>Country: ${data.country}</p>
                <p>ISP: ${data.org}</p>
            `;
        })
        .catch(error => {
            // عرض رسالة خطأ
            document.getElementById("ipResult").innerHTML = `<p>${error.message}. Please try again.</p>`;
        });
}

// دالة للحصول على معلومات البريد الإلكتروني باستخدام EmailRep.io
function getEmailInfo() {
    const email = document.getElementById("emailInput").value; // جلب البريد الإلكتروني من الإدخال
    fetch(`https://emailrep.io/${email}?key=${emailApiKey}`) // إرسال طلب إلى API
        .then(response => {
            if (!response.ok) {
                throw new Error("Error fetching email info."); // معالجة الأخطاء
            }
            return response.json();
        })
        .then(data => {
            // عرض البيانات على الصفحة
            document.getElementById("emailResult").innerHTML = `
                <p>Email: ${data.email}</p>
                <p>Reputation: ${data.reputation}</p>
                <p>Suspicious: ${data.suspicious ? "Yes" : "No"}</p>
                <p>Blacklisted: ${data.blacklisted ? "Yes" : "No"}</p>
                <p>Malicious activity: ${data.details.malicious_activity ? "Yes" : "No"}</p>
            `;
        })
        .catch(error => {
            // عرض رسالة خطأ
            document.getElementById("emailResult").innerHTML = `<p>${error.message}. Please try again.</p>`;
        });
}

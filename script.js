// دالة لإظهار القسم المطلوب وإخفاء الأقسام الأخرى
function showSection(sectionId) {
    // إخفاء جميع الأقسام
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("ip-info").style.display = "none";
    document.getElementById("email-info").style.display = "none";

    // إظهار القسم المطلوب
    document.getElementById(sectionId).style.display = "block";
}

// دالة لجلب معلومات IP باستخدام ipinfo.io
function getIpInfo() {
    const ip = document.getElementById("ipInput").value; // جلب الـ IP من حقل الإدخال
    fetch(`https://ipinfo.io/${ip}?token=YOUR_API_KEY`) // استبدل YOUR_API_KEY بمفتاح API الخاص بك
        .then(response => {
            if (!response.ok) {
                throw new Error("Error fetching IP info.");
            }
            return response.json();
        })
        .then(data => {
            // عرض بيانات IP على الصفحة
            document.getElementById("ipResult").innerHTML = `
                <p>IP: ${data.ip}</p>
                <p>City: ${data.city}</p>
                <p>Region: ${data.region}</p>
                <p>Country: ${data.country}</p>
                <p>ISP: ${data.org}</p>
            `;
        })
        .catch(error => {
            document.getElementById("ipResult").innerHTML = `<p>${error.message}. Please try again.</p>`;
        });
}

// دالة لجلب معلومات البريد الإلكتروني باستخدام EmailRep.io
function getEmailInfo() {
    const email = document.getElementById("emailInput").value; // جلب البريد الإلكتروني من حقل الإدخال
    fetch(`https://emailrep.io/${email}?key=YOUR_API_KEY`) // استبدل YOUR_API_KEY بمفتاح API الخاص بك
        .then(response => {
            if (!response.ok) {
                throw new Error("Error fetching email info.");
            }
            return response.json();
        })
        .then(data => {
            // عرض بيانات البريد الإلكتروني على الصفحة
            document.getElementById("emailResult").innerHTML = `
                <p>Email: ${data.email}</p>
                <p>Reputation: ${data.reputation}</p>
                <p>Suspicious: ${data.suspicious ? "Yes" : "No"}</p>
                <p>Blacklisted: ${data.blacklisted ? "Yes" : "No"}</p>
                <p>Malicious activity: ${data.details.malicious_activity ? "Yes" : "No"}</p>
            `;
        })
        .catch(error => {
            document.getElementById("emailResult").innerHTML = `<p>${error.message}. Please try again.</p>`;
        });
}

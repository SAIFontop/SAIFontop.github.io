// عرض الأقسام المختلفة بناءً على الزر الذي يتم النقر عليه
function showSection(sectionId) {
    const sections = document.querySelectorAll('.container, .info-section, .about-section');
    sections.forEach(section => section.style.display = 'none'); // إخفاء جميع الأقسام
    document.getElementById(sectionId).style.display = 'block'; // إظهار القسم المطلوب
}

// دالة للحصول على معلومات IP
function getIpInfo() {
    const ip = document.getElementById("ipInput").value; // الحصول على IP من المدخل
    const ipResult = document.getElementById("ipResult"); // منطقة عرض النتائج

    // التحقق من أن IP تم إدخاله
    if (!ip) {
        ipResult.innerHTML = '<p style="color: red;">Please enter a valid IP address.</p>';
        return;
    }

    // طلب معلومات IP من API
    fetch(`https://ipinfo.io/${ip}/json?token=YOUR_API_TOKEN`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                ipResult.innerHTML = `<p style="color: red;">Error: ${data.error.message}</p>`;
            } else {
                ipResult.innerHTML = `
                    <p>IP: ${data.ip}</p>
                    <p>City: ${data.city}</p>
                    <p>Region: ${data.region}</p>
                    <p>Country: ${data.country}</p>
                    <p>ISP: ${data.org}</p>
                `;
            }
        })
        .catch(error => {
            ipResult.innerHTML = `<p style="color: red;">Error fetching IP info. Please try again.</p>`;
        });
}

// دالة للحصول على معلومات البريد الإلكتروني
function getEmailInfo() {
    const email = document.getElementById("emailInput").value; // الحصول على البريد الإلكتروني من المدخل
    const emailResult = document.getElementById("emailResult"); // منطقة عرض النتائج

    // التحقق من أن البريد الإلكتروني تم إدخاله
    if (!email) {
        emailResult.innerHTML = '<p style="color: red;">Please enter a valid email address.</p>';
        return;
    }

    // طلب معلومات البريد الإلكتروني من API
    fetch(`https://emailrep.io/${email}`)
        .then(response => response.json())
        .then(data => {
            if (data.reputation) {
                emailResult.innerHTML = `
                    <p>Email: ${data.email}</p>
                    <p>Reputation: ${data.reputation}</p>
                    <p>Suspicious: ${data.suspicious ? 'Yes' : 'No'}</p>
                    <p>Blacklisted: ${data.details.blacklisted ? 'Yes' : 'No'}</p>
                    <p>Malicious Activity: ${data.details.malicious_activity ? 'Yes' : 'No'}</p>
                `;
            } else {
                emailResult.innerHTML = `<p style="color: red;">No data found for this email.</p>`;
            }
        })
        .catch(error => {
            emailResult.innerHTML = `<p style="color: red;">Error fetching email info. Please try again.</p>`;
        });
}

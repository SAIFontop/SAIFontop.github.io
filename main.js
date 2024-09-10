// دالة لإظهار القسم المطلوب وإخفاء الأقسام الأخرى
function showSection(sectionId) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.container, .about-section, .ip-info-section, .email-info-section, .login-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // إظهار القسم المطلوب
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// دالة لتسجيل النقاط
let points = 0;

function earnPoints() {
    points += 10; // يمكنك تخصيص هذه القيمة
    document.getElementById('points').innerText = points;
    checkOffers(); // التحقق من العروض المتاحة بناءً على النقاط
}

function checkOffers() {
    const offers = [
        { name: "Free Item", cost: 50 },
        { name: "10% Discount", cost: 100 }
    ];

    let availableOffers = offers.filter(offer => points >= offer.cost);
    let offersHTML = availableOffers.length ? availableOffers.map(offer => `<p>${offer.name} - ${offer.cost} points</p>`).join('') : '<p>No offers available.</p>';
    document.getElementById('availableOffers').innerHTML = offersHTML;
}

// دالة للحصول على معلومات الـ IP
function getIpInfo() {
    const ip = document.getElementById("ipInput").value;
    fetch(`https://ipinfo.io/${ip}?token=YOUR_API_KEY`) // استبدل YOUR_API_KEY بمفتاح API الخاص بك
        .then(response => response.json())
        .then(data => {
            document.getElementById('ipResult').innerHTML = `
                <p><strong>IP:</strong> ${data.ip}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Country:</strong> ${data.country}</p>
            `;
        })
        .catch(error => {
            document.getElementById('ipResult').innerHTML = `<p>Error fetching IP info. Please try again.</p>`;
        });
}

// دالة للحصول على معلومات البريد الإلكتروني
function getEmailInfo() {
    const email = document.getElementById("emailInput").value;
    fetch(`https://emailrep.io/${email}`) // يمكنك استخدام API مثل EmailRep.io للحصول على معلومات البريد الإلكتروني
        .then(response => response.json())
        .then(data => {
            document.getElementById('emailResult').innerHTML = `
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Reputation:</strong> ${data.reputation}</p>
                <p><strong>Suspicious:</strong> ${data.suspicious}</p>
            `;
        })
        .catch(error => {
            document.getElementById('emailResult').innerHTML = `<p>Error fetching email info. Please try again.</p>`;
        });
}

// دالة لإرسال رابط تسجيل الدخول عبر البريد الإلكتروني
function sendLoginLink(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const email = document.getElementById("emailInputLogin").value;
    const loginMessage = document.getElementById("loginMessage");

    // هنا يمكنك إرسال البريد الإلكتروني باستخدام خدمة مثل SendGrid أو Mailgun
    loginMessage.innerHTML = `<p style="color: green;">Login link sent to ${email}. Please check your inbox.</p>`;
}

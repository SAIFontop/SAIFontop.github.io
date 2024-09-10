// دالة لإرسال رابط الموافقة إلى البريد الإلكتروني
function sendLoginLink(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const email = document.getElementById("emailInputLogin").value;
    const loginMessage = document.getElementById("loginMessage");

    // تحقق من صحة البريد الإلكتروني
    if (!validateEmail(email)) {
        loginMessage.innerHTML = '<p style="color: red;">Invalid email address. Please try again.</p>';
        return;
    }

    // طلب لإرسال رابط البريد الإلكتروني
    // افتراض أنك ستستخدم خدمة مثل SendGrid أو Mailgun لإرسال البريد الإلكتروني
    fetch('/send-login-link', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send email.');
        }
        return response.json();
    })
    .then(data => {
        loginMessage.innerHTML = '<p style="color: green;">Login link sent! Check your email.</p>';
    })
    .catch(error => {
        loginMessage.innerHTML = '<p style="color: red;">Error sending login link. Please try again.</p>';
    });
}

// دالة للتحقق من صحة البريد الإلكتروني
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// قائمة المستخدمين (مؤقتة للاختبار)
let users = [
    { name: 'admin', role: 'admin' },
    { name: 'owner', role: 'owner' },
];

// دالة لإضافة أدمن
function addAdmin() {
    const userName = prompt("Enter the name of the user to make admin:");
    const user = users.find(u => u.name === userName);
    
    if (user) {
        user.role = 'admin';
        alert(`${userName} has been made an admin.`);
        updateUserList();
    } else {
        alert("User not found.");
    }
}

// دالة لإضافة أونر
function addOwner() {
    const userName = prompt("Enter the name of the user to make owner:");
    const user = users.find(u => u.name === userName);
    
    if (user) {
        user.role = 'owner';
        alert(`${userName} has been made the owner.`);
        updateUserList();
    } else {
        alert("User not found.");
    }
}

// دالة لتحديث قائمة المستخدمين في الواجهة
function updateUserList() {
    const userList = document.getElementById("users");
    userList.innerHTML = ''; // تفريغ القائمة
    
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerText = `${user.name} (${user.role})`;
        userList.appendChild(listItem);
    });
}

// عرض المستخدمين عند تحميل الصفحة
updateUserList();

// نظام النقاط
let points = 0;

function earnPoints() {
    points += 10;
    document.getElementById('points').innerText = points;
    checkOffers();
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

checkOffers();

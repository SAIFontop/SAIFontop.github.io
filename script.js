// قائمة المستخدمين (مؤقتة للاختبار)
let users = [
    { name: 'User1', role: 'user' },
    { name: 'User2', role: 'admin' },
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

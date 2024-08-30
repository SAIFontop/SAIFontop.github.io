// وظيفة للتحقق من حالة تسجيل الدخول
async function checkAuth() {
    try {
        const response = await fetch('https://sai-fontop-github-io.vercel.app/api/callback', { credentials: 'include' });
        const data = await response.json();
        if (data.loggedIn) {
            document.querySelector('.container').innerHTML = `
                <h1>مرحبًا بك، ${data.user.username}</h1>
                <button onclick="logout()" class="btn">تسجيل الخروج</button>
            `;
        }
    } catch (error) {
        console.error('Error checking auth:', error);
    }
}

// وظيفة لتسجيل الخروج
function logout() {
    window.location.href = 'https://your-vercel-app-url/api/logout';
}

// استدعاء وظيفة التحقق عند تحميل الصفحة
checkAuth();

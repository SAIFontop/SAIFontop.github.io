// تفعيل الرسوم المتحركة عند التمرير
AOS.init();

// إعداد "Client ID" الخاص بك من تطبيق Discord
const CLIENT_ID = 'YOUR_CLIENT_ID';
const REDIRECT_URI = 'https://911bot.org/callback'; // استبدلها بعنوان URL الخاص بك

// وظيفة تسجيل الدخول باستخدام Discord
function loginWithDiscord() {
    const discordAuthURL = `https://discord.com/api/oauth2/authorize?client_id=${1304436734117019680}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify`;
    window.location.href = discordAuthURL;
}

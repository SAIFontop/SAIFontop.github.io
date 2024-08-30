const querystring = require('querystring');

// استبدل YOUR_VERCEL_APP_URL برابط تطبيق Vercel الخاص بك
const redirect_uri = `https://sai-fontop-github-io.vercel.app/api/callback`;

module.exports = (req, res) => {
    const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=identify`;
    
    res.redirect(discordAuthUrl);
};

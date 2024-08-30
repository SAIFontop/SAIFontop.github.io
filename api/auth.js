const querystring = require('querystring');
const axios = require('axios');
const redirect_uri = `https://YOUR_VERCEL_APP_URL/api/callback`; // استبدل YOUR_VERCEL_APP_URL برابط تطبيق Vercel الخاص بك

module.exports = (req, res) => {
    res.redirect(`https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=identify`);
};

const querystring = require('querystring');
const axios = require('axios');
const redirect_uri = `https://sai-fontop-github-io.vercel.app/api/callback`; // استبدل YOUR_VERCEL_APP_URL برابط تطبيق Vercel الخاص بك

module.exports = (req, res) => {
    res.redirect(`https://discord.com/oauth2/authorize?client_id=1278969884834791435&permissions=8&integration_type=0&scope=bot=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=identify`);
};

const querystring = require('querystring');

const redirect_uri = `https://sai-fontop-github-io.vercel.app/api/callback`; // تأكد من أن هذا الرابط هو نفسه في Discord Developer Portal

module.exports = (req, res) => {
    const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=identify`;
    
    res.redirect(discordAuthUrl);
};

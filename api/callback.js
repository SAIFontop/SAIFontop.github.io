const axios = require('axios');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

module.exports = async (req, res) => {
    const code = req.query.code;
    const data = {
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: `https://sai-fontop-github-io.vercel.app/api/callback`, // استبدل YOUR_VERCEL_APP_URL بالرابط الفعلي لتطبيق Vercel الخاص بك
        code
    };

    try {
        const response = await axios.post('https://discord.com/api/oauth2/token', new URLSearchParams(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const userInfo = await axios.get('https://discord.com/api/users/@me', {
            headers: {
                'Authorization': `Bearer ${response.data.access_token}`
            }
        });

        const token = jwt.sign(userInfo.data, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.setHeader('Set-Cookie', cookie.serialize('token', token, {
            httpOnly: true,
            maxAge: 3600,
            path: '/'
        }));

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error during authentication');
    }
};
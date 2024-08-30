const axios = require('axios');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

module.exports = async (req, res) => {
    const code = req.query.code;

    if (!code) {
        return res.status(400).send('Authorization code is missing.');
    }

    const data = {
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: `https://sai-fontop-github-io.vercel.app/api/callback`,
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
        console.error('Error during authentication:', error.message, error.response ? error.response.data : 'No additional data');
        res.status(500).send('Error during authentication');
    }
};

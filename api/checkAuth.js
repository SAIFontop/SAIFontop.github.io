const jwt = require('jsonwebtoken');
const cookie = require('cookie');

module.exports = (req, res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;

    if (!token) {
        return res.json({ loggedIn: false });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ loggedIn: true, user });
    } catch (error) {
        console.error('Error verifying token:', error);
        res.json({ loggedIn: false });
    }
};

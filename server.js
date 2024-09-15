require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const { Client, GatewayIntentBits } = require('discord.js');
const bodyParser = require('body-parser');

// إعداد البوت
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(process.env.DISCORD_BOT_TOKEN);

// إعداد Express
const app = express();
app.use(bodyParser.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/discord/callback',
    scope: ['identify', 'guilds']
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// OAuth2 تسجيل الدخول عبر ديسكورد
app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback',
    passport.authenticate('discord', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

app.get('/dashboard', (req, res) => {
    if (!req.isAuthenticated()) return res.redirect('/auth/discord');
    res.sendFile(__dirname + '/index.html'); // عرض واجهة المستخدم بعد تسجيل الدخول
});

// نقطة API لجلب البوتات
app.get('/api/bots', (req, res) => {
    const bots = [
        { id: 1, name: 'Bot 1', status: 'Running' },
        { id: 2, name: 'Bot 2', status: 'Stopped' }
    ];
    res.json(bots); // يمكنك تعديل هذا لاستدعاء قاعدة بيانات حقيقية
});

// نقطة API لإنشاء بوت جديد
app.post('/api/bots', (req, res) => {
    const botName = req.body.name;
    // هنا من المفترض إنشاء بوت جديد باستخدام Discord.js
    console.log(`Creating bot: ${botName}`);
    res.status(201).json({ message: 'Bot created' });
});

// تشغيل بوت
app.post('/api/bots/:id/start', (req, res) => {
    const botId = req.params.id;
    console.log(`Starting bot: ${botId}`);
    // استخدم Discord.js لتشغيل البوت هنا
    res.status(200).json({ message: 'Bot started' });
});

// إيقاف بوت
app.post('/api/bots/:id/stop', (req, res) => {
    const botId = req.params.id;
    console.log(`Stopping bot: ${botId}`);
    // استخدم Discord.js لإيقاف البوت هنا
    res.status(200).json({ message: 'Bot stopped' });
});

// حذف بوت
app.delete('/api/bots/:id', (req, res) => {
    const botId = req.params.id;
    console.log(`Deleting bot: ${botId}`);
    // حذف البوت هنا
    res.status(200).json({ message: 'Bot deleted' });
});

// تشغيل الخادم
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

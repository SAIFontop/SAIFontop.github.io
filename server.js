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
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// إعداد استراتيجية OAuth2 لديسكورد
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

// تسجيل الدخول باستخدام OAuth2
app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback',
    passport.authenticate('discord', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

app.get('/dashboard', (req, res) => {
    if (!req.isAuthenticated()) return res.redirect('/auth/discord');
    res.sendFile(__dirname + '/index.html'); // عرض لوحة التحكم بعد تسجيل الدخول
});

// API لجلب البوتات من قاعدة البيانات
const bots = [];

app.get('/api/bots', (req, res) => {
    res.json(bots);
});

// API لإنشاء بوت جديد
app.post('/api/bots', (req, res) => {
    const botName = req.body.name;
    const newBot = { id: bots.length + 1, name: botName, status: 'Stopped' };
    bots.push(newBot);
    res.status(201).json({ message: 'Bot created', bot: newBot });
});

// API لتشغيل بوت
app.post('/api/bots/:id/start', (req, res) => {
    const botId = req.params.id;
    const bot = bots.find(b => b.id == botId);
    if (bot) {
        bot.status = 'Running';
        console.log(`Bot ${bot.name} is running.`);
        res.status(200).json({ message: 'Bot started' });
    } else {
        res.status(404).json({ message: 'Bot not found' });
    }
});

// API لإيقاف بوت
app.post('/api/bots/:id/stop', (req, res) => {
    const botId = req.params.id;
    const bot = bots.find(b => b.id == botId);
    if (bot) {
        bot.status = 'Stopped';
        console.log(`Bot ${bot.name} is stopped.`);
        res.status(200).json({ message: 'Bot stopped' });
    } else {
        res.status(404).json({ message: 'Bot not found' });
    }
});

// API لحذف بوت
app.delete('/api/bots/:id', (req, res) => {
    const botId = req.params.id;
    const botIndex = bots.findIndex(b => b.id == botId);
    if (botIndex !== -1) {
        bots.splice(botIndex, 1);
        res.status(200).json({ message: 'Bot deleted' });
    } else {
        res.status(404).json({ message: 'Bot not found' });
    }
});

// تشغيل الخادم
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

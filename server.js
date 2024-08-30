require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const { Client, GatewayIntentBits } = require('discord.js');

// إعداد Express
const app = express();
const PORT = process.env.PORT || 3000;

// إعداد Discord.js للبوت
const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
bot.login(process.env.DISCORD_BOT_TOKEN);

// إعداد الجلسات
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// إعداد Discord OAuth2
passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: 'https://your-heroku-or-vercel-app-url.com/auth/discord/callback',
    scope: ['identify']
}, (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// المسارات
app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ message: 'Logged in', user: req.user });
    } else {
        res.json({ message: 'Not logged in' });
    }
});

// مسار تسجيل الدخول
app.get('/auth/discord', passport.authenticate('discord'));

// مسار العودة من تسجيل الدخول
app.get('/auth/discord/callback', passport.authenticate('discord', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/');
});

// مسار تسجيل الخروج
app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

// بدء خادم Express
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

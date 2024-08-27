const express = require('express');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;

const app = express();

// Configure session management
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// Set up the Discord strategy for Passport
passport.use(new DiscordStrategy({
  clientID: 'YOUR_CLIENT_ID',  // Replace with your Discord Client ID
  clientSecret: 'YOUR_CLIENT_SECRET',  // Replace with your Discord Client Secret
  callbackURL: 'http://localhost:3000/auth/discord/callback',  // Replace with your callback URL
  scope: ['identify', 'email']
}, (accessToken, refreshToken, profile, done) => {
  // Here you can save the profile info to the database if needed
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Routes
app.get('/auth/discord', passport.authenticate('discord'));

app.get('/auth/discord/callback', passport.authenticate('discord', {
  failureRedirect: '/'
}), (req, res) => {
  res.redirect('/dashboard');
});

app.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

app.get('/dashboard', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.send(`Hello ${req.user.username}, welcome to your dashboard!`);
});

app.get('/', (req, res) => {
  res.send('Welcome to 911bot! <a href="/auth/discord">Login with Discord</a>');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

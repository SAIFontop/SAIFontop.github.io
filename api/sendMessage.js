const { Client, GatewayIntentBits } = require('discord.js');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

const bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
bot.login(process.env.DISCORD_BOT_TOKEN);

module.exports = async (req, res) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;

    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);

        const { channelId, message } = req.body;
        const channel = await bot.channels.fetch(channelId);

        if (channel) {
            await channel.send(message);
            res.status(200).send('Message sent!');
        } else {
            res.status(404).send('Channel not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending message');
    }
};

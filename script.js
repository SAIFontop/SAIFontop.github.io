require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());

app.post('/execute-command', async (req, res) => {
    const command = req.body.command;

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                prompt: command,
                max_tokens: 150,
                n: 1,
                stop: null,
                temperature: 0.7
            })
        });

        const data = await response.json();
        res.json({ result: data.choices[0].text });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

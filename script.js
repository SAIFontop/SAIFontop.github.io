// dashboard.js

async function executeCommand() {
    const commandInput = document.getElementById('commandInput').value;

    // التأكد من وجود أمر قبل الإرسال
    if (commandInput.trim() === '') {
        alert('Please enter a command!');
        return;
    }

    // استدعاء API لـ OpenAI مع الأمر المدخل
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`
        },
        body: JSON.stringify({
            prompt: commandInput,
            max_tokens: 150,
            n: 1,
            stop: null,
            temperature: 0.7
        })
    });

    const data = await response.json();

    // عرض النتائج في لوحة التحكم
    document.getElementById('commandOutput').innerText = data.choices[0].text;
}

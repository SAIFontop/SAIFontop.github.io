document.getElementById('sendMessageForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const channelId = document.getElementById('channelId').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:3000/api/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ channelId, message })
        });

        const result = await response.json();
        alert(result.status || result.error);
    } catch (error) {
        console.error('Error:', error);
        alert('حدث خطأ أثناء إرسال الرسالة');
    }
});

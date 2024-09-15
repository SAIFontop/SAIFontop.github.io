document.addEventListener('DOMContentLoaded', () => {
    const myBotsList = document.getElementById('my-bots');
    const createBotBtn = document.getElementById('create-bot-btn');

    // جلب بيانات البوتات الحالية للمستخدم من API
    async function fetchBots() {
        try {
            const response = await fetch('/api/bots');
            const bots = await response.json();
            myBotsList.innerHTML = ''; // مسح القائمة الحالية

            bots.forEach(bot => {
                const botItem = document.createElement('li');
                botItem.innerHTML = `
                    <strong>${bot.name}</strong> - ${bot.status}
                    <div class="actions">
                        <button class="btn" onclick="startBot(${bot.id})">تشغيل</button>
                        <button class="btn" onclick="stopBot(${bot.id})">إيقاف</button>
                        <button class="btn" onclick="deleteBot(${bot.id})">حذف</button>
                    </div>
                `;
                myBotsList.appendChild(botItem);
            });
        } catch (error) {
            console.error('Error fetching bots:', error);
        }
    }

    // إضافة بوت جديد
    createBotBtn.addEventListener('click', async () => {
        const botName = prompt('أدخل اسم البوت الجديد:');
        if (botName) {
            try {
                await fetch('/api/bots', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: botName })
                });
                fetchBots(); // تحديث قائمة البوتات
            } catch (error) {
                console.error('Error creating bot:', error);
            }
        }
    });

    // تشغيل بوت
    window.startBot = async function(botId) {
        try {
            await fetch(`/api/bots/${botId}/start`, { method: 'POST' });
            fetchBots(); // تحديث قائمة البوتات
        } catch (error) {
            console.error('Error starting bot:', error);
        }
    };

    // إيقاف بوت
    window.stopBot = async function(botId) {
        try {
            await fetch(`/api/bots/${botId}/stop`, { method: 'POST' });
            fetchBots(); // تحديث قائمة البوتات
        } catch (error) {
            console.error('Error stopping bot:', error);
        }
    };

    // حذف بوت
    window.deleteBot = async function(botId) {
        if (confirm('هل أنت متأكد من حذف هذا البوت؟')) {
            try {
                await fetch(`/api/bots/${botId}`, { method: 'DELETE' });
                fetchBots(); // تحديث قائمة البوتات
            } catch (error) {
                console.error('Error deleting bot:', error);
            }
        }
    };

    // جلب البيانات الأولية
    fetchBots();
});

document.addEventListener('DOMContentLoaded', () => {
    const myBotsList = document.getElementById('my-bots');
    const createBotBtn = document.getElementById('create-bot-btn');

    // جلب بيانات البوتات الحالية للمستخدم
    function fetchBots() {
        // هنا يمكنك استدعاء API لجلب بيانات البوتات
        const bots = [
            { id: 1, name: 'Bot 1', status: 'Running' },
            { id: 2, name: 'Bot 2', status: 'Stopped' }
        ];

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
    }

    // إضافة بوت جديد
    createBotBtn.addEventListener('click', () => {
        const botName = prompt('أدخل اسم البوت الجديد:');
        if (botName) {
            // هنا يتم إرسال الطلب لإنشاء البوت عبر API
            console.log(`Creating bot: ${botName}`);
            // جلب البيانات المحدثة
            fetchBots();
        }
    });

    // تشغيل بوت
    window.startBot = function(botId) {
        console.log(`Starting bot: ${botId}`);
        // استدعاء API لتشغيل البوت
        fetchBots();
    };

    // إيقاف بوت
    window.stopBot = function(botId) {
        console.log(`Stopping bot: ${botId}`);
        // استدعاء API لإيقاف البوت
        fetchBots();
    };

    // حذف بوت
    window.deleteBot = function(botId) {
        if (confirm('هل أنت متأكد من حذف هذا البوت؟')) {
            console.log(`Deleting bot: ${botId}`);
            // استدعاء API لحذف البوت
            fetchBots();
        }
    };

    // جلب البيانات الأولية
    fetchBots();
});

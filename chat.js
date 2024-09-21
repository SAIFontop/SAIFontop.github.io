<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الشات</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>الشات الذكي</h1>
        <nav>
            <ul>
                <li><a href="index.html">الرئيسية</a></li>
                <li><a href="chat.html">الشات</a></li>
                <li><a href="rules.html">القوانين</a></li>
            </ul>
        </nav>
    </header>

    <section id="chat-section">
        <h2>تفاعل مع الذكاء الاصطناعي</h2>
        <div id="chat-box">
            <div id="messages"></div>
            <input type="text" id="user-input" placeholder="اكتب رسالتك هنا...">
            <button onclick="sendMessage()">إرسال</button>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 موقع الذكاء الاصطناعي لبوتات Discord</p>
    </footer>

    <script src="chat.js"></script>

</body>
</html>

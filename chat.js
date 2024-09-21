/* إعداد الخط */
body {
    font-family: 'Tajawal', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

/* تصميم الـ Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #4A63E7;
    color: white;
}

.navbar .logo h1 {
    font-size: 24px;
}

.navbar nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

.navbar nav ul li {
    margin-left: 20px;
}

.navbar nav ul li a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    padding: 8px 15px;
    transition: background-color 0.3s;
}

.navbar nav ul li a:hover,
.navbar nav ul li a.active {
    background-color: #333;
    border-radius: 5px;
}

/* تصميم قسم الشات */
.chat-section {
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4A63E7;
}

.chat-container {
    width: 80%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.messages {
    height: 400px;
    padding: 20px;
    overflow-y: scroll;
    background-color: #f9f9f9;
    border-bottom: 1px solid #ddd;
}

.chat-input {
    display: flex;
    padding: 10px;
    background-color: #f1f1f1;
    border-top: 1px solid #ddd;
}

.chat-input input[type="text"] {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
    margin-right: 10px;
}

.chat-input button {
    padding: 10px 20px;
    background-color: #4A63E7;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.chat-input button:hover {
    background-color: #333;
}

/* تصميم الرسائل */
.message {
    margin-bottom: 10px;
}

.message .user {
    font-weight: bold;
    color: #4A63E7;
}

.message .bot {
    font-weight: bold;
    color: #333;
}

.message-content {
    padding: 10px;
    background-color: #e2e2e2;
    border-radius: 5px;
    margin-top: 5px;
    word-wrap: break-word;
    max-width: 70%;
}

.user-message .message-content {
    background-color: #d1e7ff;
    margin-left: auto;
    text-align: right;
}

.bot-message .message-content {
    background-color: #f1f1f1;
}

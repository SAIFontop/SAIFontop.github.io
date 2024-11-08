const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// إعداد الصفحة الرئيسية
app.get('/', (req, res) => {
    res.send('مرحبًا بك في خادم 911 Family!');
});

// بدء الخادم
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

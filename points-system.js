let points = 0; // البدء بعدد النقاط من الصفر

// دالة لزيادة النقاط عند النقر على زر
function earnPoints() {
    points += 10; // إضافة 10 نقاط في كل مرة
    document.getElementById('points').innerText = points; // تحديث عرض النقاط
    checkOffers(); // تحديث العروض بناءً على النقاط
}

// دالة للتحقق من العروض المتاحة بناءً على النقاط
function checkOffers() {
    const offers = [
        { name: "Free Item", cost: 50 },
        { name: "10% Discount", cost: 100 }
    ];

    // فلترة العروض المتاحة بناءً على عدد النقاط
    let availableOffers = offers.filter(offer => points >= offer.cost);
    let offersHTML = availableOffers.length ? availableOffers.map(offer => `<p>${offer.name} - ${offer.cost} points</p>`).join('') : '<p>No offers available.</p>';

    // عرض العروض المتاحة
    document.getElementById('availableOffers').innerHTML = offersHTML;
}

// استدعاء الدالة للتحقق من العروض في البداية
checkOffers();

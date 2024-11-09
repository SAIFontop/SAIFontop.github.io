document.getElementById("partner-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("partner-name").value;
    const link = document.getElementById("partner-link").value;
    const image = document.getElementById("partner-image").value;

    // إنشاء عنصر الشريك
    const partnerCard = document.createElement("div");
    partnerCard.classList.add("partner-card");
    partnerCard.innerHTML = `
        <img src="${image}" alt="${name}">
        <p>${name}</p>
        <a href="${link}" target="_blank">انضم إلى ديسكورد</a>
    `;

    // إضافة الشريك إلى القائمة
    document.getElementById("partners-container").appendChild(partnerCard);

    // إعادة تعيين النموذج
    document.getElementById("partner-form").reset();
});

function logout() {
    window.location.href = "index.html";
}

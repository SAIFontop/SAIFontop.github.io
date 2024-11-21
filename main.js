// إحصائيات الأعضاء
document.addEventListener("DOMContentLoaded", () => {
    const membersCount = document.getElementById("members-count");

    async function fetchMembersCount() {
        try {
            const response = await fetch("https://discord.com/api/guilds/1088100548160528404/widget.json");
            const data = await response.json();
            membersCount.textContent = `${data.presence_count} عضو متصل`;
        } catch (error) {
            console.error("Error fetching members:", error);
            membersCount.textContent = "غير متاح حالياً";
        }
    }

    fetchMembersCount();
});

// عرض الشركاء
const partnersData = [
    { name: "شريك 1", logo: "logo.png", link: "#" },
    { name: "شريك 2", logo: "logo.png", link: "#" },
];

const partnersContainer = document.getElementById("partners");
if (partnersContainer) {
    partnersData.forEach((partner) => {
        const partnerCard = document.createElement("div");
        partnerCard.innerHTML = `
            <img src="assets/images/${partner.logo}" alt="${partner.name}">
            <h3>${partner.name}</h3>
            <a href="${partner.link}" target="_blank">انضم الآن</a>
        `;
        partnersContainer.appendChild(partnerCard);
    });
}

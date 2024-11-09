document.getElementById("partner-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("partner-name").value;
    const link = document.getElementById("partner-link").value;
    const image = document.getElementById("partner-image").value;

    const partner = { name, link, image };

    let partners = JSON.parse(localStorage.getItem("partners")) || [];
    partners.push(partner);
    localStorage.setItem("partners", JSON.stringify(partners));

    displayPartners();
    document.getElementById("partner-form").reset();
    document.getElementById("add-partner-form").style.display = "none";
});

function displayPartners() {
    const partnersContainer = document.getElementById("partners-container");
    partnersContainer.innerHTML = "";

    let partners = JSON.parse(localStorage.getItem("partners")) || [];
    partners.forEach(partner => {
        const partnerCard = document.createElement("

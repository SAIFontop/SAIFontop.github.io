function showAlert() {
    alert("Thank you for your interest in 911 Family! Stay tuned for more updates.");
}

function showAbout() {
    document.getElementById("about").style.display = "block";
    document.getElementById("ip-info").style.display = "none";
    document.getElementById("email-info").style.display = "none";
    window.location.href = "#about";
}

function showIpInfo() {
    document.getElementById("ip-info").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("email-info").style.display = "none";
    window.location.href = "#ip-info";
}

function showEmailInfo() {
    document.getElementById("email-info").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("ip-info").style.display = "none";
    window.location.href = "#email-info";
}

function getIpInfo() {
    const ip = document.getElementById("ipInput").value;
    fetch(`https://ipinfo.io/${ip}?token=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("ipResult").innerHTML = `
                <p>IP: ${data.ip}</p>
                <p>City: ${data.city}</p>
                <p>Region: ${data.region}</p>
                <p>Country: ${data.country}</p>
                <p>ISP: ${data.org}</p>
            `;
        })
        .catch(error => {
            document.getElementById("ipResult").innerHTML = `<p>Error fetching IP info. Please try again.</p>`;
        });
}

function getEmailInfo() {
    const email = document.getElementById("emailInput").value;
    fetch(`https://emailrep.io/${email}?key=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("emailResult").innerHTML = `
                <p>Email: ${data.email}</p>
                <p>Reputation: ${data.reputation}</p>
                <p>Suspicious: ${data.suspicious ? "Yes" : "No"}</p>
                <p>Blacklisted: ${data.blacklisted ? "Yes" : "No"}</p>
                <p>Malicious activity: ${data.details.malicious_activity ? "Yes" : "No"}</p>
            `;
        })
        .catch(error => {
            document.getElementById("emailResult").innerHTML = `<p>Error fetching email info. Please try again.</p>`;
        });
}

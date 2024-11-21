// Fetch Discord Members Count
const membersCountElement = document.getElementById('members-count');

async function fetchDiscordMembers() {
    try {
        // Replace with your Discord API endpoint
        const response = await fetch('https://api.discord.com/example-endpoint');
        const data = await response.json();
        membersCountElement.textContent = `${data.members} عضو`;
    } catch (error) {
        console.error('Error fetching members count:', error);
        membersCountElement.textContent = 'غير متوفر حالياً';
    }
}

fetchDiscordMembers();

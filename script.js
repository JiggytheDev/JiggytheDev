document.addEventListener("DOMContentLoaded", () => {
    // Slack profile information
    const slackProfile = {
        displayName: "Olajiire Abodunrin", // Input your Slack display name here
        email: "olajiireabodunrin2@gmail@slack.com", // Input your Slack email here
        profilePicture: "https://via.placeholder.com/150" // Input the URL of your Slack profile picture here
    };

    // Set Slack profile information
    document.getElementById("displayName").textContent = slackProfile.displayName;
    document.getElementById("email").textContent = slackProfile.email;
    document.getElementById("profilePicture").src = slackProfile.profilePicture;
    document.getElementById("profilePicture").alt = slackProfile.displayName;

    // Set current time in UTC
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        document.getElementById("currentTimeUTC").textContent = utcTime;
        
        // Set current day of the week
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        document.getElementById("currentDay").textContent = daysOfWeek[now.getUTCDay()];
    }

    updateTime();
    setInterval(updateTime, 60000); // Update time every minute
});
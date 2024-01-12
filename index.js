const timerlabel = document.getElementById("timer");

function updateTimer() {
    const targetEpochTime = 1705141800;
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const remainingSeconds = Math.max(targetEpochTime - currentTime, 0);

    const days = Math.floor(remainingSeconds / 86400);
    const hours = Math.floor((remainingSeconds % 86400) / 3600);
    const seconds = remainingSeconds % 60;
    timerlabel.textContent = `${days} Days ${hours} hours and ${seconds} seconds`;
}

updateTimer();
setInterval(updateTimer, 1000);
const timerlabel = document.getElementById("timer");

function formatNumberWithTwoDigits(number){
    return String(number).padStart(2, '0');
}

function updateTimer() {
    const targetEpochTime = 1705141800;
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const remainingSeconds = Math.max(targetEpochTime - currentTime, 0);

    const days = Math.floor(remainingSeconds / 86400);
    const hours = Math.floor((remainingSeconds % 86400) / 3600);
    const minutes = Math.floor(((remainingSeconds%86400)%3600)/60);
    const seconds = remainingSeconds % 60;
    timerlabel.textContent = formatNumberWithTwoDigits(days) + ":" + formatNumberWithTwoDigits(hours) + ":" + formatNumberWithTwoDigits(minutes) + ":" + formatNumberWithTwoDigits(seconds);
}

updateTimer();
setInterval(updateTimer, 1000);
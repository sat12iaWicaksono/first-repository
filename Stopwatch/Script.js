const darkButton = document.getElementById("dark");
const start = document.getElementById("start")
const pause = document.getElementById("pause")
const refresh = document.getElementById("refresh")

const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondElement = document.getElementById("second")

let totalTimeInSecond = 0;
let stopwatchInterval;

function startStopwatch() {
    clearInterval(stopwatchInterval)

    stopwatchInterval = setInterval(function() {

        totalTimeInSecond++

        const hours = Math.floor(totalTimeInSecond / 3600)
        const minutes = Math.floor((totalTimeInSecond % 3600) / 60)
        const second = totalTimeInSecond % 60

        hoursElement.textContent = hours.toString().padStart(2, '0')
        minutesElement.textContent = minutes.toString().padStart(2, '0')
        secondElement.textContent = second.toString().padStart(2, '0')
    }, 1000)
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval)
}

function resetStopwatch() {
    clearInterval(stopwatchInterval)
    totalTimeInSecond = 0

    hoursElement.textContent = '00'
    minutesElement.textContent = '00'
    secondElement.textContent = '00'
}

start.addEventListener('click', startStopwatch)
pause.addEventListener('click', pauseStopwatch)
refresh.addEventListener('click', resetStopwatch)

darkButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');
});
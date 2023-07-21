const timerDisplay = document.getElementById('timer')
const startButton = document.getElementById('start').disabled = false
const stopButton = document.getElementById('stop').disabled = true
const resetButton = document.getElementById('reset').disabled = true

// Set default time
let timeLeft = 1500 // 25 minutes in seconds
let isTimerRunning = false
let timerInterval

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    const displayText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    timerDisplay.textContent = displayText
}

function startTimer() {
    console.log('Start Button Clicked')
    if (isTimerRunning) return
    isTimerRunning = true
    timerInterval = setInterval(() => {
        timeLeft--
        if (timeLeft < 0) {
            clearInterval(timerInterval)
            timeLeft = 0
            isTimerRunning = false
        }
        updateTimer()
    }, 1000)
    document.getElementById("start").disabled=true
    document.getElementById("stop").disabled=false
    document.getElementById("reset").disabled=false
}

function stopTimer() {
    console.log('Stop Button Clicked')
    clearInterval(timerInterval)
    updateTimer()
    isTimerRunning = false
    document.getElementById("start").disabled = false
    document.getElementById("stop").disabled=true
}

function resetTimer() {
    console.log('Reset Button Clicked')
    clearInterval(timerInterval)
    timeLeft = 1500
    isTimerRunning = false
    updateTimer()
    document.getElementById("start").disabled=false
    document.getElementById("stop").disabled=true
    document.getElementById("reset").disabled=true
}
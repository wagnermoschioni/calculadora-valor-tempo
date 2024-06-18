let startTime;
let timerInterval;
let isRunning = false;

let valorBaseMinuto = 0.99;

function startTimer() {
    if (!isRunning) {
        startTime = new Date();
        timerInterval = setInterval(updateTime, 1000);
        isRunning = true;
        document.getElementById('startButton').disabled = true;
        document.getElementById('stopButton').disabled = false;
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        updateTime(); // Update one last time to get final value
        isRunning = false;
        document.getElementById('startButton').disabled = false;
        document.getElementById('stopButton').disabled = true;
        const elapsedTime = new Date() - startTime;
        const totalMinutes = elapsedTime / 60000;
        const finalValue = totalMinutes * valorBaseMinuto;
        document.getElementById('total').textContent = 'Valor total: R$ ' + finalValue.toFixed(2);
        
    }
}

function updateTime() {
    const currentTime = new Date();
    const elapsedTime = currentTime - startTime;
  
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
  

    document.getElementById('timer').textContent =
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;

    const totalMinutes = elapsedTime / 60000;
    const value = totalMinutes * valorBaseMinuto;
    document.getElementById('value').textContent = 'Valor: R$ ' + value.toFixed(2);
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
let counter = parseFloat(localStorage.getItem('counter')) || 0;
const increment = 0.001;
let intervalId = null;

function updateCounter() {
    counter += increment;
    document.getElementById('counterValue').textContent = counter.toFixed(3);
    localStorage.setItem('counter', counter.toFixed(3));
}

document.getElementById('startButton').addEventListener('click', function() {
    if (intervalId === null) {
        intervalId = setInterval(updateCounter, 1000);
        document.getElementById('startButton').textContent = 'Stop';
        document.getElementById('startButton').classList.remove('start');
        document.getElementById('startButton').classList.add('stop');
    } else {
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById('startButton').textContent = 'Start';
        document.getElementById('startButton').classList.remove('stop');
        document.getElementById('startButton').classList.add('start');
    }
});

// Initial load from localStorage
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('counterValue').textContent = counter.toFixed(3);
    if (localStorage.getItem('intervalId') !== null) {
        intervalId = setInterval(updateCounter, 1000);
        document.getElementById('startButton').textContent = 'Stop';
        document.getElementById('startButton').classList.remove('start');
        document.getElementById('startButton').classList.add('stop');
    }
});

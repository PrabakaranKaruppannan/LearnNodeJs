const waitTime = 5000;
let timeInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += timeInterval;
    console.log(`Waiting time ${currentTime/1000} seconds`);
};

console.log(`Setting ${waitTime} delay`);
const timerFinished = () => {
    clearInterval(interval);
    console.log('Done');
}

const interval = setInterval(incTime, timeInterval);
setTimeout(timerFinished, waitTime);

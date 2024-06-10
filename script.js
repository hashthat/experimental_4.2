document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const memeImage = document.getElementById('memeImage');
    const audio = document.getElementById('audio');
    let intervalId = null;

    startButton.addEventListener('click', () => {
        startButton.disabled = true;
        stopButton.disabled = false;
        startMoving();
    });

    stopButton.addEventListener('click', () => {
        startButton.disabled = false;
        stopButton.disabled = true;
        stopMoving();
    });

    const startMoving = () => {
        intervalId = setInterval(() => {
            memeImage.style.top = `${Math.random() * (window.innerHeight - 500)}px`;
            memeImage.style.left = `${Math.random() * (window.innerWidth - 500)}px`;
            audio.play();
        }, 1000);
    };

    const stopMoving = () => {
        clearInterval(intervalId);
        audio.pause();
        audio.currentTime = 0; // Reset audio to start
    };
});


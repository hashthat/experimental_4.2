// Project developed by Samuel Alberts
// University of Advancing Technology
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const memeImage = document.getElementById('memeImage');
    const audio = document.getElementById('audio');
    let intervalId = null;
// start button functionality which uses an event listener as to whether or not a person clicks on the button. The start 
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
// https://dev.to/daveguz97/adding-sound-to-a-react-project-51m3
// if someone would want to find the video to the background music, it is located at the link below
// https://youtu.be/ZgzPSw95MOQ
// the first import would be the React API which is part of the initialization of the evironment

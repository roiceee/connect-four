const backgroundAudio = new Audio("music/background.mp3");


function playAudio() {
    backgroundAudio.play();
    backgroundAudio.loop = true;    
}

function stopAudio() {
    backgroundAudio.currentTime = 0;
    backgroundAudio.pause();
}

function muteAudio() {
    backgroundAudio.muted = true;
}

function unmuteAudio() {
    backgroundAudio.muted = false;
}

export {playAudio, stopAudio, muteAudio, unmuteAudio}
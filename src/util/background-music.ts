const audio = new Audio("/background.MP3");

function playAudio() {
    audio.play();
}

function restartAudio() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

function muteAudio() {
    audio.muted = true;
}

function unMuteAudio() {
    audio.muted = false;
}

export {playAudio, restartAudio, muteAudio, unMuteAudio};
function play() {

    var audio = document.getElementById("audio");
    audio.volume = 0.2;
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
window.onload = function () {
    textArea = document.getElementById("text-area");
    animationSelected = document.getElementById("animation");
    fontSize = document.getElementById("fontsize");
    turboSpeed = document.getElementById("turbo");
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");

    startButton.onclick = start;
    stopButton.onclick = stop;
    animationSelected.onchange = getFrames;
    fontSize.onchange = reSize;
    turboSpeed.onchange = turbo;

}
"use strict";
var textArea, animationSelected, fontSize, timer, startButton, stopButton, speed = 250, turboSpeed;

function start() {
    var frames = textArea.value.split("=====\n");
    var i = 0, l = frames.length;
    (function nextFrame() {
        textArea.value = frames[i];

        if (++i >= l) {
            i = 0;
        }
        timer = setTimeout(nextFrame, speed);
    })();
    stopButton.disabled = false;
    startButton.disabled = true;
};

function stop(time) {
    stopButton.disabled = true;
    startButton.disabled = false;
    clearTimeout(timer);
    getFrames();
}


function getFrames() {
    var dropSel = animationSelected.options[animationSelected.selectedIndex].innerHTML;
    textArea.value = ANIMATIONS[dropSel];

}

function reSize() {
    var fontsize = fontSize.options[fontSize.selectedIndex].value;
    textArea.style.fontSize = fontsize;
}

function turbo() {
    if (turboSpeed.checked) {
        speed = 50;
    }
    else {
        speed = 250;
    }
}


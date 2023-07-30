window.onload = function () {

    let animationFrame = 250;
    var animation = null;

    let textArea = document.getElementById("text-area");
    let startbutton = document.getElementById("start");
    let stopButton = document.getElementById("stop");
    let animationSelector = document.getElementById("animation");
    let sizeSelector = document.getElementById("fontsize");
    let turboSelector = document.getElementById("turbo");

    startbutton.onclick = onAnimationStart;
    stopButton.onclick = onAnimationStopped;
    animationSelector.onchange = onAnimationSelector;
    sizeSelector.onchange = onSizeSelector;
    turboSelector.onchange = onTurboSelector;

    function onAnimationStart() {
        startbutton.disabled = true;
        stopButton.disabled = false;
        animationSelector.disabled = true;
        clearInterval(animation);
        animate(textArea.value, animationFrame);
    }

    function onAnimationStopped() {
        startbutton.disabled = false;
        stopButton.disabled = true;
        animationSelector.disabled = false;
        clearInterval(animation);
        onAnimationSelector();
    }

    function animate(actor, frame) {
        let actors = actor.split("=====\n");
        var i = 0;
        clearInterval(animation);
        animation = setInterval(function () {
            textArea.value = actors[i++];
            if (i == actors.length) {
                i = 0;
            }
        }, frame);
    }

    function onAnimationSelector() {
        let selectedAnimation = animationSelector.value;
        textArea.value = ANIMATIONS[selectedAnimation];
    }

    function onSizeSelector() {
        let sizeValue = sizeSelector.value;
        textArea.style.fontSize = sizeValue;
    }

    function onTurboSelector() {
        animationFrame = turboSelector.checked ? 50 : 250;
        if (startbutton.disabled) {
            animate(textArea.value, animationFrame);
        }
    }
}
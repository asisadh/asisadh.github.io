window.onload = function () {

    let growthRate = 250;
    let growthAmount = 10;
    let width = "100";
    let timerId = null;

    let circle = document.getElementById("circle");
    let widthText = document.getElementById("width");
    let growthAmountText = document.getElementById("growthAmount");
    let growthRateText = document.getElementById("growthRate");
    let numberCircles = document.getElementById("numberCircles");
    let start = document.getElementById("start");

    circle.onclick = remove
    start.onclick = startAnimation

    animation(growthAmount, growthRate);

    function increase(element, growthAmount) {
        element.style.height = parseInt(circle.clientHeight) + growthAmount + "px";
        element.style.width = parseInt(circle.clientWidth) + growthAmount + "px";
        element.style.borderRadius = parseInt(circle.clientHeight) / 2 + "px";
        element.style.marginTop = "-" + element.clientHeight / 2 + "px";
        element.style.marginLeft = "-" + element.clientHeight / 2 + "px";
    }

    function remove() {
        clearInterval(timerId);
        timerId = null;
        circle.style.height = "0px";
        circle.style.width = "0px";
    }

    function startAnimation() {
        if (timerId != null) {
            clearInterval(timerId);
            timerId = null;
        }
        growthRate = parseInt(growthRateText.value) || growthRate;
        growthAmount = parseInt(growthAmountText.value) || growthAmount;
        let circleHeight = parseInt(widthText) || width;
        circle.style.height = circleHeight + "px";
        circle.style.width = circleHeight + "px";
        animation(growthAmount, growthRate);

        let numberOfCircles = parseInt(numberCircles.value)
        if (numberOfCircles > 1) {
            // createMultipleCircles()
        }
    }

    function animation(growthAmount, growthRate) {
        if (timerId == null) {
            timerId = setInterval(increase, growthRate, circle, growthAmount)
        }
    }

    function createMultipleCircles() {

        for (let i = 0; i < numberCircles.value; i++) {
            let newCircle = document.createElement("div");
            newCircle.style.backgroundColor = 'red';
            document.getElementById("circle").appendChild(newCircle);
            newCircle.style.height = widthText.value + "px";
            newCircle.style.width = widthText.value + "px";
            newCircle.style.borderRadius = widthText.value / 2 + "px";
            newCircle.style.marginTop = "-" + (parseInt(circle.clientHeight) / 2) * (i * 10) + "px";
            newCircle.style.marginLeft = "-" + (parseInt(circle.clientHeight) / 2) * (i * 10) + "px";
            timerId = setInterval(increase, growthRate, newCircle, growthAmount);
        }
    }
}

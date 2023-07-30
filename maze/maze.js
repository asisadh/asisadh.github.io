$(document).ready(function () {

    var gameOver = false;

    $("#start").click(function () {
        $("#maze > .boundary").removeClass("youlose");
        $("#status").text("Click the \"S\" to begin.");
        gameOver = false;
    });

    $("#maze > .boundary").mouseover(function () {
        if (!gameOver) {
            $("#maze > .boundary").addClass("youlose");
            $("#status").text("Sorry, you lost. :[")
            gameOver = true;
        }
    });

    $("#maze").mouseleave(function () {
        if (!gameOver) {
            $("#maze > .boundary").addClass("youlose");
            $("#status").text("Sorry, you lost. :[")
            gameOver = true;
        }
    });

    $("#end").mouseover(function () {
        if (!gameOver) {
            $("#status").text("You Win. :] Click the \"S\" to begin.");
            gameOver = true;
        }
    });
});
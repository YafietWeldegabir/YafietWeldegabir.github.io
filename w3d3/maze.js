$(document).ready(function () {
    var isplaying = false;
    $("#start").click(function () {
        isplaying = true;
        $("#status").text("Playing");
        $(".boundary").removeClass("youlose");
        $(".boundary").mouseover(lose);
        $("#maze").mouseleave(lose);

        $("#end").mouseenter(win);

    });

    function lose() {
        if(isplaying==true){
             $(".boundary").addClass("youlose");
            $("#status").text("You Lost!");
            isplaying = false;
        }
    }
    function win() {
        if (isplaying==true) {
        $("#status").text("You Won!");
        isplaying = false;
        }
    }
});

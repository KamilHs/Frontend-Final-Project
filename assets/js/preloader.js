$(window).on("load", function () {
    $(".preloader-wrapper").css('top', `${$(document).scrollTop()}px`)
    $(".preloader-wrapper").fadeOut("slow");
});
$(document).on('scroll', function () { // Adding to  document scroll event
    $(".preloader-wrapper").css('top', `${$(document).scrollTop()}px`); //Everytime we scroll function will change top position of preloader so we couldn't scroll it away
})
$(window).on("load", function () {// Adding to window load event
    $(".preloader-wrapper").css('top', `${$(document).scrollTop()}px`)//When all document will be ready this function will start and again it changes top position of preloader
    $(".preloader-wrapper").fadeOut("slow");//And making preloader dissappear
});
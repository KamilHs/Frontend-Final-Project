$(document).ready(function () {
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll > 20) {
            $('.main-menu').addClass('menu-transform')
        }
        else {
            $('.main-menu').removeClass('menu-transform');
        }
    });
});
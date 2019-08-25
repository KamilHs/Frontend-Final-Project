$(document).ready(function () {
    checkScroll()
    $(window).scroll(function () {
        checkScroll()
    });
    function checkScroll() {
        const scroll = $(window).scrollTop();
        if (scroll > 20) {
            $('.main-menu').addClass('menu-transform')
        }
        else {
            $('.main-menu').removeClass('menu-transform');
        }
    }
});
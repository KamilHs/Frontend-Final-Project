$(document).ready(function () {
    const button = $('.menu-trigger');
    $(button).click(() => {
        if ($(button).hasClass('open')) {
            $(button).removeClass('open');
            $('.menu').removeClass('active');
        }
        else {
            $(button).addClass('open');
            $('.menu').addClass('active');
        }
    });
});
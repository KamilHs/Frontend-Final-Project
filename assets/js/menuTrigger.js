$(document).ready(function () {
    const button = $('.menu-trigger');
    $(button).click(() => {
        if ($(button).hasClass('open')) {
            $(button).removeClass('open');
        }
        else {
            $(button).addClass('open');
        }
    });
});
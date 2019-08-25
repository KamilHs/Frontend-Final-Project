$(document).ready(function () {
    $(document).on('click', 'a[href^="#"]', function (e) {
        if ($(this).attr('href').length > 1) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        }
    });
});
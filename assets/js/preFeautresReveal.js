$(document).ready(function () {
    checkViewPort()
    $(document).scroll(e => {
        e.preventDefault();
        checkViewPort()
    });
    function checkViewPort() {
        const viewTop = $(document).scrollTop();
        const viewBottom = viewTop + $(window).height();
        const sectionTop = $('.pre-features').offset().top;
        const sectionBottom = sectionTop + $('.pre-features').height();
        if (viewTop < sectionTop && viewBottom > sectionBottom) {
            $('.pre-features-item').each((index, item) => {
                $(item).addClass('revealed');
                $(item).css('transition-delay', `${(index + 1) * 0.15}s`);
            })
        }
    }
});
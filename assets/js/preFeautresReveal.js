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
        const sectionMidlle = sectionTop + $('.pre-features').height() / 2;
        if (viewTop < sectionTop && viewBottom > sectionMidlle) {
            $('.pre-features-item').each((index, item) => {
                $(item).addClass('revealed');
                $(item).css('transition-delay', `${(index + 1) * 0.15}s`);
            })
        }
    }
});
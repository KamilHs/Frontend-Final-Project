$(document).ready(function () {
    checkViewPort()
    $(document).scroll(e => {
        e.preventDefault();
        checkViewPort()
    });
    function checkViewPort() {
        const viewTop = $(document).scrollTop();
        const viewBottom = viewTop + $(window).height();
        $('.reveal-top').each((index, section) => {
            const sectionTop = $(section).offset().top;
            const sectionQuarter = sectionTop + $(section).height() / 4;
            if (viewTop < sectionTop && viewBottom > sectionQuarter) {
                if ($(section).hasClass('pre-features')) {
                    $('.pre-features-item').each((index, item) => {
                        $(item).addClass('revealed');
                        $(item).css('transition-delay', `${(index + 1) * 0.15}s`);
                    })
                }
                else {
                    $('.pricing-item').each((index, item) => {
                        $(item).addClass('revealed');
                        $(item).css('transition-delay', `${(index + 1) * 0.15}s`);
                    })
                }

            }
        })
    }
});
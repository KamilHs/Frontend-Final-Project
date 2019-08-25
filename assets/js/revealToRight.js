$(document).ready(function () {
    checkViewPort()
    $(document).scroll(e => {
        e.preventDefault();
        checkViewPort()
    });
    function checkViewPort() {
        const viewTop = $(document).scrollTop();
        const viewBottom = viewTop + $(window).height();
        $('div.image').each((index, image) => {
            const sectionTop = $(image).offset().top;
            const sectionQuarter = sectionTop + $(image).height() / 4;
            if (viewTop < sectionTop && viewBottom > sectionQuarter) {
                $(image).addClass('reveal-right');
            }
        })

    }
});
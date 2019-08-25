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
            const sectionBottom = sectionTop + $(image).height();
            if (viewTop < sectionTop && viewBottom > sectionBottom) {
                $(image).addClass('reveal-right');
            }
        })

    }
});
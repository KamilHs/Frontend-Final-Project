$(document).ready(() => {
    checkViewPort()
    $(document).scroll(e => {
        e.preventDefault();
        checkViewPort()
    });

    function checkViewPort() {
        const viewTop = $(document).scrollTop();
        const viewBottom = viewTop + $(window).height();
        const sectionTop = $('.parallax-counter').offset().top;
        const sectionBottom = sectionTop + $('.parallax-counter').height();
        if (viewTop < sectionTop && viewBottom > sectionBottom) {
            count();
        }
    }

    function count() {
        const counters = $('.parallax-counter').find('strong');
        const highBounds = [96, 190, 12, 46];
        const intervals = [];
        const countingDuration = 2000;

        for (let i = 0; i < highBounds.length; i++) {
            intervals[i] = (countingDuration / highBounds[i]);
        }        

        $(counters).each((index, counter) => {
            let localCounter = 1;
            const interval = setInterval(function () {
                if ($(counter).text() >= highBounds[index]) {
                    clearInterval(interval);
                }
                else{
                    $(counter).text(localCounter++);
                }
            }, intervals[index])
        });
    }
});
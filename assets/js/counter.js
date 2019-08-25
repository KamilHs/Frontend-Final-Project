$(document).ready(() => {
    let alreadydone = false
    checkViewPort()
    $(document).scroll(e => {
        e.preventDefault();
        checkViewPort()
    });

    function checkViewPort() {
        const viewTop = $(document).scrollTop();
        const viewBottom = viewTop + $(window).height();
        const sectionTop = $('.parallax-counter').offset().top;
        const sectionMidlle = sectionTop + $('.parallax-counter').height() / 2;
        if (viewTop < sectionTop && viewBottom > sectionMidlle) {
            if (!alreadydone) {
                count();
                alreadydone = true;
            }
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
                else {
                    $(counter).text(localCounter++);
                }
            }, intervals[index])
        });
    }
});
$(document).ready(function () {
    $('.question-card-body').attr('data-height', $('.question-card-body').height());
    $('.question-card-body').css('height', 0);
    $('.question-card-header').click(function (e) {
        e.preventDefault();
        const cardBody = $($(this).next());
        if (cardBody.css('height') != '0px') {
            cardBody.css('height', 0);
        }
        else {
            $('.question-card-body').css('height', 0);
            cardBody.css('height', `${cardBody.attr('data-height')}px`);
        }

    });
});
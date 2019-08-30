$(document).ready(function () {
    //We are looking for all elements with class 'question-card-body'
    //  and setting to them an attribute which holds their heights
    $('.question-card-body').attr('data-height', $('.question-card-body').height());
    $('.question-card-body').css('height', 0); //After we set their heights to 0
    $('.question-card-header').click(function (e) { // Adding the click event to elements with class 'question-card-header'
        e.preventDefault(); //Preventing Default
        const cardBody = $($(this).next()); //Creating a variable which  holds a sibling element after 'this'(question-card-header) which is element with class 'question-card-body'
        if (cardBody.css('height') != '0px') { // Checking if its height is 0
            cardBody.css('height', 0); // If not we assign it to 0
        }
        else {
            $('.question-card-body').css('height', 0); // If it was zero we are assigning height = 0 to all 'question-card-body'
            cardBody.css('height', `${cardBody.attr('data-height')}px`); // And to the current 'question-card-body' we set a height which we take from its attribute which holds its
            //initial height
        }
    });
});
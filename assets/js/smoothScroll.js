$(document).ready(function () {
    $(document).on('click', 'a[href^="#"]', function (e) { // Adding to all a tags in document that has href attribute which starts with '#' sign
        if ($(this).attr('href').length > 2) { // Checking if href length is more than 2. Because we have tags that has href='#' and they lead to error 
            e.preventDefault();// IF yes the we preventing default
            $('html, body').stop().animate({ // Assigning to html and body animation
                scrollTop: $($(this).attr('href')).offset().top //Setting scrollTop property to vertical distance from top of document to the object in px 
            }, 500, 'linear'); // Setting a time in which it will happen and giving in linear timing function
        }
    });
});
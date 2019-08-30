$(document).ready(function () {
    checkScroll()  // Calling function  to prevent a problem when an item is in viewport from page load
    $(window).scroll(function () { //Adding  scroll event to the window
        checkScroll() // Calling function
    });
    function checkScroll() { // These function checks if we have scrolled more than 20px from top of document if yes then it adds to DOM object a class
        const scroll = $(window).scrollTop();// assigning scroll to the variable
        if (scroll > 20) { // Checking if we  have scrolled more than 20 or not
            $('.main-menu').addClass('menu-transform') // If yes function adds to DOM onject with class 'main-menu' a class 'menu-transform'
        }
        else {
            $('.main-menu').removeClass('menu-transform'); // If not the it remove that  class
        }
    }
});
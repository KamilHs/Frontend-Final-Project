$(document).ready(function () {
    const button = $('.menu-trigger');  //Assigning to variable a DOM object
    $(button).click(() => { //Adding to it click event
        if ($(button).hasClass('open')) { //Checking If it has a open class
            $(button).removeClass('open'); // If yes then we remove open class
            $('.menu').removeClass('active');// And removing 'active' class  from object witht class 'menu'
        }
        else {
            $(button).addClass('open');// If not the we add open  class
            $('.menu').addClass('active');// And adding 'active' class to object with class 'menu
        }
    });
});
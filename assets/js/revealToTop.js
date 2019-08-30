$(document).ready(function () {
    checkViewPort()// Calling function  to prevent a problem when an item is in viewport from page load
    $(document).scroll(e => {// Adding scroll event to the document
        e.preventDefault(); // Preventing Default
        checkViewPort()// Calling Function
    });
    function checkViewPort() {//This Function checks if desirable DOM object is in viewport or not
        const viewTop = $(document).scrollTop();// Taking viewport's higher bound
        const viewBottom = viewTop + $(window).height();// Taking viewport's lower bound
        $('.reveal-top').each((index, section) => { // Creating each loop to all DOM objects with class 'reveal-top'
            const sectionTop = $(section).offset().top;// Taking a vertical distance from top of document to the object in px 
            const sectionQuarter = sectionTop + $(section).height() / 4; //I wanted to element start appearing when we scroll up to the their 
            //top quarte so I found top quarte of desired objects
            if (viewTop < sectionTop && viewBottom > sectionQuarter) {// Checking if object is in viewport
                if ($(section).hasClass('pre-features')) { // Checking if object has class 'pre-features'
                    $('.pre-features-item').each((index, item) => { //If yes then we create a each loop for elements that have class 'pre-features-item'
                        $(item).addClass('revealed'); // Adding 'revealed' class to them
                        $(item).css('transition-delay', `${(index + 1) * 0.15}s`); // Adding to them transition-delay property depending on ther indexes 
                    })
                }
                else {
                    $('.pricing-item').each((index, item) => {//IF no then we create a each function to the elements that have class ' pricing-item'
                        $(item).addClass('revealed');// Adding 'revealed' class to them
                        $(item).css('transition-delay', `${(index + 1) * 0.15}s`);// Adding to them transition-delay property depending on ther indexes 
                    })
                }
            }
        })
    }
});
$(document).ready(function () {
    checkViewPort()  // Calling function  to prevent a problem when an item is in viewport from page load
    $(document).scroll(e => { // Adding to document scroll event
        e.preventDefault();// Preventing default
        checkViewPort() // Calling Function
    });
    function checkViewPort() {//This Function checks if desirable DOM object is in viewport or not
        const viewTop = $(document).scrollTop();// Taking viewport's higher bound
        const viewBottom = viewTop + $(window).height();// Taking viewport's lower bound
        $('div.image').each((index, image) => { // Creating an each function to all DOM objects div which has image class
            const sectionTop = $(image).offset().top;// Taking a vertical distance from top of document to the object in px 
            const sectionQuarter = sectionTop + $(image).height() / 4;//I wanted to element start appearing when we scroll up to the their 
            // top quarter so I found top quarter of desired objects
            if (viewTop < sectionTop && viewBottom > sectionQuarter) {// Checking if object is in viewport
                $(image).addClass('reveal-right'); // If yes then we add to element class 'reveal-right'
            }
        })
    }
});
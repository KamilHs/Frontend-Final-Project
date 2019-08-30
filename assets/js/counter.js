$(document).ready(() => {
    let alreadyDone = false // We are creating a variable which we will use to check if we already did our actions or not
    checkViewPort() // Calling function  to prevent a problem when an item is in viewport from page load
    $(document).scroll(e => { // Adding scroll event to the document
        e.preventDefault();// Preventing Default
        checkViewPort() // Calling Function
    });

    function checkViewPort() { //This Function checks if desirable DOM object is in viewport or not
        const viewTop = $(document).scrollTop(); // Taking viewport's higher bound
        const viewBottom = viewTop + $(window).height(); // Taking viewport's lower bound
        const sectionTop = $('.parallax-counter').offset().top; // Taking a vertical distance from top of document to the object in px 
        const sectionMidlle = sectionTop + $('.parallax-counter').height() / 2; //I wanted to element start appearing when we scroll up to the their middle so I found middle of desired objects
        if (viewTop < sectionTop && viewBottom > sectionMidlle) {// Checking if object is in viewport
            if (!alreadydone) {//if we haven't already did  these operations then we will have true from this if
                count(); // Calling Function
                alreadyDone = true; // Assigning true to alreadyDone because we are already doing our actions
            }
        }
    }

    function count() { // These function changes value of DOM elements,increases them to the high bound. In our case the value is a number
        const counters = $('.parallax-counter').find('strong'); // We are searching for all counters whichs' value will be changed
        const highBounds = [96, 190, 12, 46]; // In our case we have 4 counters so I've created an array which holds their maximum value
        const intervals = []; // We will use it to declare an interval for each counter to make them finish  at the same moment
        const countingDuration = 2000; // Im giving duration of counting 2 seconds

        for (let i = 0; i < highBounds.length; i++) {//Creating a loop 
            intervals[i] = (countingDuration / highBounds[i]); // Setting an interval for each counter by dividing 2 seconds by ther maximum value
        }

        $(counters).each((index, counter) => { //For all counters creating each loop
            let localCounter = 1; // Assigning to variable  value 1 . We will use this variable to change counter's value
            const interval = setInterval(function () {// creating an interval
                if ($(counter).text() >= highBounds[index]) { //Checking if counter already reached its higher Bound
                    clearInterval(interval); // If yes we are clearing interval and ending function for this counter
                }
                else {
                    $(counter).text(localCounter++); // If not the we assign its value to incremented localCounter
                }
            }, intervals[index]) // This is time in which inteval will repeat operations
        });
    }
});
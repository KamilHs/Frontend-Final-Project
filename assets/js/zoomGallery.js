$(document).ready(function () {
    $('.page-gallery').magnificPopup({//This is plugin's file but i will try to explain it
        delegate: 'a', // Delegate means what we are looking for
        type: 'image', // type shows which type popup should be
        closeOnContentClick: false, //Disabling ability to close popup by clicking on poped up element
        closeBtnInside: true, // Adding a close button
        mainClass: 'mfp-with-zoom mfp-img-mobile', // CSS classes which will be added
        image: { //Image' property
            verticalFit: true, // Plugin will verticaly fil image
            titleSrc: function (item) { // this function  returns a title for each puped up element
                return `Manage In One Place`; // Title which will be returned
            }
        },
        gallery: { // Gallery simply means slider we will be able to slide between all pop up elements
            enabled: true // setting gallery true
        },
        zoom: { // Zoom means that will object be zoomed or not
            enabled: true, // Setting zoom true
            duration: 300, // TIme in which it will be zoomed
            opener: function (element) {
                return element.find('img'); // Function return object that is zoomed
            }
        }
    });
});

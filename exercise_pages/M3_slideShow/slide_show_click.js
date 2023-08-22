"use strict";

$(document).ready( () => {

    // this variable selects the first child (img element) within the div with id="slides"
    let nextSlide = $("#slides img:first-child");
    
    //this constant is set to a function which transitions through each img element
    const runSlideShow = () => {
        
        //fades-out each caption after 1 second (1000 milliseconds)
        $("#caption").fadeOut(1000);
        
        //fades out each id="slide" (the main img-element that is displayed) after 1 second. Then it has a callback function, which exeutes after the fadeOut efect is finished.
        $("#slide").fadeOut(1000,
                            
            //callback function
            () => {
                //if there's no next slide (aka the last img-element), then it sets nextSlide to the first child (img-element) of id="slides" again
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                //or else if there is a next slide, it sets nextSlide to the next element within id="slides"
                else {
                    nextSlide = nextSlide.next();
                }
            
                //these constants set the "src" and "alt" attributes of the displayed img-element
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");

                //uses the above constants to fade-in the picture & caption of the displayed img-element
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);
                $("#caption").text(nextCaption).fadeIn(1000);
            
        });    // end fadeOut()
        
    };    // end runSlideShow
    
    
    //calls runSlideShow() every 3 seconds
    let timer1 = setInterval(runSlideShow, 3000);
    
    
    // click-event-handler starts/stops the above timer when the user clicks on the img-element with id="slide"
    $("#slide").click( () => {
        
        // if timer1 isn't already null, it clears the interval of timer1 and sets timer1 to null
        if (timer1 != null) {
            clearInterval(timer1);
            timer1 = null;
            
        // or else, if timer1 is already null, it starts timer1 again with the same interval from above
        } else {
            runSlideShow();
            timer1 = setInterval(runSlideShow, 3000);
        }
    });    // end click-event-handler
    
    
});    //end document-ready
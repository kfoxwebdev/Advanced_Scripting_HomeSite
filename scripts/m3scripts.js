// JavaScript Document

"use strict";

$(document).ready( () => {
    
    
    // scrolling-based interactions
    
    $(window).scroll(function() {
        
        //intro paragraph disappears after scrolling down past 40 and reappears after scrolling back up
        if ($(this).scrollTop()> 40) {
            
            if(!$('.m3Page__opacityPara').is('.run')) {
              $('.m3Page__opacityPara').animate({opacity: "0"}, 500).addClass('run');
            }
            
        } else { 
            
            if($('.m3Page__opacityPara').is('.run')) {
              $('.m3Page__opacityPara').animate({opacity: "1"}, 500).removeClass('run');
            }
            
        } // END else-statement
        
        
        
        // in the CSS, m3Page__experience has its "top" set at 5rem and "display" set to none. when the scroll bar is past 200, this "fadeIn" makes it display, and then "animate" changes the top to 0rem. both are set to 500 milliseconds
        if ($(this).scrollTop()> 100) {
            //This makes the "experience" fade in and move up. "queue" is false so the effects run at the same time.
            $('.m3Page__experience').fadeIn({queue: false, duration: 500}).animate({top: "0rem"}, 500);
        }
        
        
        // in the CSS, m3Page__skills and m3Page__education have "left" set to 20rem so that these can animate in from the side. Otherwise, they both work like the m3Page__experience code above
        if ($(this).scrollTop()> 150) {
            $('.m3Page__skills').fadeIn({queue: false, duration: 500}).animate({left: "0rem"}, 1000);
        }
        
        if ($(this).scrollTop()> 300) {
            $('.m3Page__education').fadeIn({queue: false, duration: 500}).animate({left: "0rem"}, 1000);
        }


    }); // END $(window).scroll
    
    
    
    //this code lets users click on my contact info to add or remove the "italic" class, which uses CSS to change the font to italic.
    $('.m3Page__contact').click(() => {
        if ($('.m3Page__contact').hasClass('italic')) {
            
            $('.m3Page__contact').removeClass('italic');
        } else {
            $('.m3Page__contact').addClass('italic');
        }
    });
    
    

    
});
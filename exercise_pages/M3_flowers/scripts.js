// JavaScript Document
"use strict";
$(document).ready( () => {
	
    //The following interactions are based on scrolling.
    
    $(window).scroll(function() {
        
        
        
        // ---below code is for upper half of the page on top of main image---
        
        
        
        // The keyword "this" looks at the 'current element'. We decide the current element with the following selectors. scrollTop looks at the position of the vertical scrollbar. If the position is above 100px run the next statements.
        if ($(this).scrollTop()> 100) {
            
            //this second if-statement keeps the animations playing while we scroll. Otherwise they will pause if we scroll before the animation is finished.
            if (!$('.square').is('.run')) {
                
                // In one second anything with class="evanescere" (the div with the h1 & paragraph on top of the main picture) will fade out.
                $('.evanescere').fadeOut(1000);
                
                // In one second everything with class="square" (the white rectangle under the main picture) will animate the width wider.
                $('.square').animate({width: "100%"}, 1000).addClass('run');
            }
        
        //The "else" handles when we scroll back up - it undoes everything from the if-statement.
        } else { 
            
            //again, this second if-statement keeps the animations playing while we scroll. Otherwise they will pause if we scroll before the animation is finished.
            if ($('.square').is('.run')) {
                
                // In one second anything with class="evanescere" will fade in.
                $('.evanescere').fadeIn(1000);
                
                // In one second everything with class="square" will animate the width smaller.
                $('.square').animate({width: "0px"}, 1000).removeClass('run'); 
            }
            
        } // END else-statement
        
        
        
        // ---below code is for the content underneath the main image---
        
        
        
        //The animate() method works because in the CSS we set the top to 200px when the document loads. So when the scroll bar is past 200px we'll run the motion.
       
        if ($(this).scrollTop()> 200) {
            //In 1/2 a second the content will fade in and in one second the content will move up. We set "queue" to false so that the animations/effects run at the same time. There is no code to undo this animation since we want the content to stay visible after it fades in.
            $('.content').fadeIn({queue: false, duration: 500}).animate({top: "0px"}, 1000);
        }

    }); // END $(window).scroll
    
    
    
    // ---below code is for the content inside the footer---
    
    
    
    // animates the footer when its clicked on. If the open class is applied, it will move the top element back in place and remove the open class. Otherwise, it will move the top element to the left and add the class.
    $('#peeka').click(() => {
        if ($('#peeka').hasClass('open')) {
            //This will close the footer in 1/2 a second.
            $('#peeka').animate({right: "0px"}, 500).removeClass('open');
        } else {
            //This will open the footer in 1/2 a second.
            $('#peeka').animate({right: "90px"}, 500).addClass('open');
        }
    });
    
    /* 
    //This version animates the footer via hover ("mouseenter") instead of click. It changes the right property because the footer is set to float right
    $('#peeka').mouseenter(() => {
        $('#peeka').animate({right: "90px"}, 500);
    });
    $('#peeka').mouseleave(() => {
        $('#peeka').animate({right: "0px"}, 500);
    })
    */
    
});
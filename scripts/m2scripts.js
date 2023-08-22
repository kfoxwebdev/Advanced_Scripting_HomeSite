"use strict";

$(document).ready( () => {
	
    
//This code controls the opening/closing of the tabs
    
	//Attaches event handlers when user clicks on an h4 inside the div with id="boxOtabs"
	$("#boxOtabs h4").click( evt => {
	
		//Finds the clicked-on h4 heading, set it as a variable called $clickedTab
		const $clickedTab = evt.currentTarget;
		
		//toggles ""m2Page__tab--open" class for $clickedTab (the clicked-on h4)
		$($clickedTab).toggleClass("m2Page__tab--open");
		
		// shows/hides the next object after $clickedTab
		if ($($clickedTab).attr("class") !== "m2Page__tab--open") {
			$($clickedTab).next().hide();
		} else {
			$($clickedTab).next().show();
		}
	});
	
    
    
//This code controls the thumbnail gallery image-swapping
    
    	// preloads all images
	$(".m2Page__thumbnailList a").each( (index, link) => {
        const image = new Image();
        image.src = link.href;
    });
    
    	// sets up event handlers for the <a> links
    $(".m2Page__thumbnailList a").click( evt => {
        
		// get the clicked-on <a> tag
        const link = evt.currentTarget;
		
		// swap image
        $(".m2Page__mainPic").attr("src", link.href);
		
		// cancel the default action of the link, aka prevent links from completely loading a new page with the href-image-file
        evt.preventDefault();
    });
	
    
});
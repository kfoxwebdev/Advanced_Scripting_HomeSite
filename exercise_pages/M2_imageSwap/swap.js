// JavaScript Document
"use strict";

$(document).ready(() => {
	
	// preload images
	$("#image_list a").each( (index, link) => {
        const image = new Image();
        image.src = link.href;
    });
	
	// set up event handlers for links    
    $("#image_list a").click( evt => {
        
		// get clicked <a> tag
        const link = evt.currentTarget;
		
		// swap image
        $("#main_img").attr("src", link.href);
		
		//swap caption
        $("#caption").text(link.title);
		
		// cancel the default action of the link, aka prevent links from completely loading a new page with the href-image-file
        evt.preventDefault();
		
    });
	
	// move focus to first thumbnail
    $("section:first-child a").focus();
	
});
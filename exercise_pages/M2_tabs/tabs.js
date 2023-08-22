"use strict";

$(document).ready( () => {
	
	//Attach event handlers
	$("#tabs h2").click( evt => {
	
		//Find the clicked on heading
		const h2 = evt.currentTarget;
		
		//toggle minus class for h2
		$(h2).toggleClass("minus");
		
		// show/hide next object after h2
		if ($(h2).attr("class") !== "minus") {
			$(h2).next().hide();
		} else {
			$(h2).next().show();
		}
		
		// stops the <a> links from reloading the whole page when user clicks a tab
		evt.preventDefault();
		
	});
	
	//set focus on the tab of first h2
	$("#tabs").find("a:first").focus();
	
});
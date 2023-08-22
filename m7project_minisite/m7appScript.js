"use strict";

$(document).ready( () => {
	
	//create click-event for the element with id="addAdj" (the add-adjective-button)
	$("#addAdj").click( ()=> {
		
		const textboxAdj = $("#adjective"); //get the element with id="adjective" (the adjective-textbox)
        const adjective = textboxAdj.val(); //get whatever the user types in the adjective-textbox
		
		if(adjective === "") { //if the user doesnt put anything in the adjective-textbox...
			alert("Please enter an adjective."); //show this alert...
			textboxAdj.focus; //then put the focus back on the adjective-textbox-element (this uses the variable we created above)
			
		} else {
			let adjectives = localStorage.adjObject || ""; //make a variable called "adjectives" and set it to "localStorage.adjObject"
			//This is Web Storage, an alternative to cookies. Web Storage allows applications to store data locally within the user's browser. adjObject is the "key" which is usually paired with a value.  in this case, the || "" means that a blank-string is the default value.
			localStorage.adjObject = adjectives.concat(adjective, ", "); //within the web-storage object we just created, take each entered adjective and concatenate them, while using "," to put a comma after each adjective. It updates the adjectives-variable each time the user enters a new adjective.
			textboxAdj.val(""); // empty out whatever was in the adjective-textbox before (so the user can type new adjectives in)
			$("#adjList").text(localStorage.adjObject) //set the text-content of the element with id="adjList" to whatever is stored in localStorage.adjObject
			textboxAdj.focus();//then put the focus back on the adjective-textbox
		}
	});
	
	
	//create click-event for the element with id="clearAdj" (the clear-button for adjectives.)
	$("#clearAdj").click( ()=> {
		
		localStorage.removeItem("adjObject"); // removes the "adjObject" object from local-storage
		$("#adjList").text(""); //set the element with id="adjList" value to an empty string
		$("#adjective").focus; //put the focus back on the adjective-textbox
	});
	
	
	$("#adjList").text(localStorage.adjObject); //set the text-content of the adjList-element to the "adjObject" object that's in local-storage. This means that  if there's already a local storage object (from a previous session), it will display as soon as the page loads.
    
	$("#adjective").focus(); //put the focus on the element with id="adjective (the adjective-textbox)
	
	
    
    
    //The below code works the same as everything above, but for the adverb input & buttons
    
	$("#addAdv").click( ()=> {
		
		const textboxAdv = $("#adverb"); 
        const adverb = textboxAdv.val();
		
		if(adverb === "") {
			alert("Please enter an adverb.");
			textboxAdv.focus;
		} else {
			let adverbs = localStorage.advObject || "";
			localStorage.advObject = adverbs.concat(adverb, ", ");
			textboxAdv.val("");
			$("#advList").text(localStorage.advObject);
			textboxAdv.focus();
		}
	});
	
	$("#clearAdv").click( ()=> {
		localStorage.removeItem("advObject");
		$("#advList").text("");
		$("#adverb").focus;
	});
	
	$("#advList").text(localStorage.advObject)
    
    
    
    
    //The below code works the same as everything above, but for the food input & buttons
    
    $("#addFood").click( ()=> {
		
		const textboxFood = $("#food"); 
        const food = textboxFood.val();
		
		if(food === "") {
			alert("Please enter a food.");
			textboxFoodood.focus;
		} else {
			let foods = localStorage.foodObject || "";
			localStorage.foodObject = foods.concat(food, ", ");
			textboxFood.val("");
			$("#foodList").text(localStorage.foodObject);
			textboxFood.focus();
		}
	});
	
	$("#clearFood").click( ()=> {
		localStorage.removeItem("foodObject");
		$("#foodList").text("");
		$("#food").focus;
	});
	
	$("#foodList").text(localStorage.foodObject)
    
    
});
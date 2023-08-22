"use strict";

$(document).ready( () => {
	
	//create click-event for the element with id="add_task" (the add-task-button)
	$("#add_task").click( ()=> {
		
		const textbox = $("#task"); //get the element with id="task" (the textbox)
        const task = textbox.val(); //get whatever the user types in the textbox
		
		if(task === "") { //if the user doesnt put anything in the textbox...
			alert("Please enter a task."); //show this alert...
			textbox.focus //then put the focus back on the textbox-element (this uses the variable we created above)
			
		} else {
			
			let tasks = localStorage.myTasks || ""; //make a variable called "tasks" and set it to "localStorage.myTasks"
			//This is Web Storage, an alternative to cookies. Web Storage allows applications to store data locally within the user's browser. myTasks is the "key" which is usually paired with a value.  in this case, the || "" means that a blank-string is the default value.
			
			localStorage.myTasks = tasks.concat(task, "\n"); //within the web-storage object we just created, take each entered task and concatenate them, while usins "\n" to put each task on a new line. It updates the tasks-variable each time the user enters a new task.
		
			textbox.val(""); // empty out whatever was in the textbox before (so the user can type new tasks in)
            
			$("#task_list").val(localStorage.myTasks) //set the value of the element with id="task_list" to whatever is stored in localStorage.myTasks
            
			textbox.focus();//then put the focus back on the textbox
		}
	});
	
	
	
	//create click-event for the element with id="clear_tasks" (the clear-tasks-button)
	$("#clear_tasks").click( ()=> {
		
		localStorage.removeItem("myTasks"); // removes the myTasks-item from local-storage
        
		$("#task_list").val(""); //set the task-list element's value to an empty string
        
		$("#task").focus(); //put the focus back on the task-element
	});
	
	
    
	$("#task_list").val(localStorage.myTasks) //set the value of the task-list-element to the myTasks object that's in local-storage
    
    
	$("#task").focus(); //put the focus back on the task-element
	
	
});
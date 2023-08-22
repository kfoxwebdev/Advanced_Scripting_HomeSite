"use strict";


const displayTaskList = tasks => {
    //create a function called "displayTaskList" and our parameter "tasks" is the name of the array we're setting up

    let taskString = "";
    //makes a temporary variable called "taskString" that's initially set to an empty string


    if (tasks.length > 0) {
    // if the length of the tasks-array is bigger than 0
    
        tasks = tasks.map( task => [task[0], new Date(task[1]) ] );
        //pass a callback function to make a map() method of the tasks array. This converts the stored date string for each element (or task) to a Date object. It's an array of arrays, where the first array item is the task. The second is the date. These two values combine to make our map (aka task pair).

        tasks.sort((task1, task2) => {
            const date1 = task1[1];
            const date2 = task2[1];
            //this looks at the second array items, aka the date-objects. it uses the code below to put our tasks in order by date

            if (date1 < date2) { return -1; }
            //if the first date is less than the second date, return -1
            else if (date1 > date2) { return 1; }
            //if the first date is greater than the second date, return 1
            else { return 0; }
            //if the dates are the same, return 0.
        });
        
        taskString = tasks.reduce( (prev, curr) => {
        //take our taskString temporary-variable and use reduce() to change our data from a bunch of arrays to one string. reduce() accepts the previous result returned (the preexisting date-tasks strings) plus the current value in the array
            
            return prev + curr[1].toDateString() + " - " + curr[0] + "\n";
            // return the previous (the preexisting date-task strings) plus the current (the array where item [0] is a task-string and item [1] is the date-object) then convert the current date-object to a string, concatenate a dash, plus the current task name, and then a line break
        }, "");
    }


    $("#task_list").val(taskString);
    //set the value of the element with id="task_list" to the value of our taskString variable from above

    $("#task").focus();
    //put the browser's focus on the element with id="task"
};




$(document).ready( () => {
//create an event handler that runs when the page is ready

    const taskString = localStorage.tasks;
    //look at local storage and see if there's an item/array called tasks, and assign that value to a constant called taskstring

    const tasks = (taskString) ? JSON.parse(taskString) : [];
    //if "taskString" exists, then use parse to convert taskString from a JSON-string into an array that's string-value the browser can display. if it doesn't exist (there arent any tasks), then set tasks to an empty array


    $("#add_task").click( () => {
    //event handler that runs a callback function when the id="add_task" element is clicked

        const task = $("#task").val();
        //make a constant called "task" set to the value of the element with id="task" (the task textbox)
        
        const dateString = $("#due_date").val();
        //make a constant called "dateString" set to the value of the element with id="due_date" (the date textbox)

        const dueDate = new Date(dateString);
        //the value we get from dateString above is a string-value, and this code converts it into a date-object


        if(task && dateString && dueDate != "Invalid Date"){
        // if the constants above (the user's input) are not equal to "invalid date"
            
            const newTask = [task, dateString];
            //make an array called newTask with the task & dateString values from above (the user's input)
            
            tasks.push(newTask);
            //push our newTask array into the end position of our tasks-array (the list of tasks that will display on the page). The order of the items may be changed by the date sorting code we made earlier

            localStorage.tasks = JSON.stringify(tasks);
            // take our tasks-array from local-storage, and then confert it from JSON code into a string-value

            $("#task").val("");
            //once we've taken the task that the user entered and added it to our tasks-array, then clear out the id="task" text-entry box by setting its value to an empty string

            $("#due_date").val("");
            //clear out the due-date text-entry box the same way

            displayTaskList(tasks);
            //call our "displayTaskList" function from the top of this code, passing our "tasks" array as the argument (so that all the tasks display on the page)

        } else {
        //if the user inputs an invalid date

            alert("Please enter a task and valid due date.");
            //show an alert

            $("#task").select();
            //puts the cursor back into the taskbox so the user can correct their entry
        }
    });
    

    $("#clear_tasks").click( () => {
    //event handler that runs a callback function when the id="clear_tasks" element is clicked

        tasks.length = 0;
        //sets the length of our tasks-array to 0, removing all the items

        localStorage.removeItem("tasks");
        //deletes our tasks-array out of local storage

        $("#task_list").val("");
        //sets the element with id="task_list" (the box that displays the tasks on the page) to an empty string

        $("#task").focus();
        //put the browser's focus on the element with id="task"

    });   


    displayTaskList(tasks);
    //this way, if we reload the page after having added tasks (and not cleared them), it will still show all the tasks we added before
    
});
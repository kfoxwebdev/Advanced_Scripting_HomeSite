"use strict";
$(document).ready( () => {

    // move focus to first text box
    $("#email").focus();
    
    
    
    // the handler for the change-event of the radio buttons
    $(":radio").change( () => { 
        
        const radioButton = $(":checked").val(); //Get the value of the checked radio button
        
        if (radioButton == "corporate") {
            $("#company_name").attr("disabled", false);
            $("#company_name").next().text("*"); 
                // if the radio button is set to "corporate", select id="company_name" and set the value of attribute "disabled" to "false". Then, select the next element after "company_name" (the span element) and change its text-content to an asterisk
        } else {
            $("#company_name").attr("disabled", true); 
            $("#company_name").next().text(""); 
                // if the radio button is not set to "corporate", select "company_name" and set the value of attribute "disabled" to "true". Then, select the next element (the span) and change its contents to an empty-string (aka, no asterisk)
        }
    }); // END handler for the radio buttons
    
    
    
    // the handler for the click-event of the submit-button
    $("#member_form").submit( event => {
        
        
        // "isValid" is the variable we are using to stop the default action if we don't we don't have valid info. (see the preventDefault code at the bottom of this document)
        let isValid = true;
        
        
        
        // each step of the below email-validation is explained in comments. All the other validations in this handler (password, name, etc) follow a similar pattern
        
        // validate the email entry
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/; // this regular-expression sets up the pattern we want in order to verify it's a valid email
        
        const email = $("#email").val().trim(); // select the email textbox, get the value, and trim the empty spaces
        
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
                // if the user didn't type anything, select the element next to the email-textbox and change the text to: "This field is required." Then, set the isValid-variable to "false"
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
                // use the test-method to check that the input (the email-variable) matches the pattern we set up with the regular expression (the emailPattern-variable). If it doesn't match, select the element next to the email-textbox, change the text to the "must be valid" message, and set isValid to false
        } else {
            $("#email").next().text("");
                // if the input passes the first 2 if-statements above, select the element (span) next to the email-textbox, and change the text to an empty string
        }
        
        $("#email").val(email); //if the entered email-address passes the if-else statements above, we set the value of the email-textbox to the email-constant (what the user entered)
        
        
        
        // validate the password entry
        const password = $("#password").val().trim();  // Select the password textbox, get the value, and trim the empty spaces
        
        if ( password.length < 6) {
            $("#password").next().text("Must be 6 or more characters.");
            isValid = false;
                // if user enters a password less than 6 characters, select the element (span) next to the password-textbox and change the text to "Must be 6 or more characters." Then, set the isValid-variable to false
        } else {
            $("#password").next().text("");
                // if the entry passes the if-statement above, Select the element (span) after the password-textbox and fill it with an empty string
        }
        
        $("#password").val(password); // Set the value of the password-textbox to the password-constant (what the user entered)
        
        
        
        // validate the verify entry
        const verify = $("#verify").val().trim(); 
        
        if (verify == "") { 
            $("#verify").next().text("This field is required.");
            isValid = false;
        } else if (verify !== password) {
            $("#verify").next().text("Must match first password entry.");
            isValid = false;
        } else {
            $("#verify").next().text("");
        }
        
        $("#verify").val(verify);

        
        
        
        // validate the company name entry (but only if the element does NOT have the "disabled" attribute from the radio buttons above)
        if ( !$("#company_name").attr("disabled")) { 
            
            const companyName = $("#company_name").val().trim();
            
            if (companyName == "") {
				$("#company_name").next().text("This field is required.");
                isValid = false;
            } else {
                $("#company_name").next().text("");
            }
            
            $("#company_name").val(companyName);
        }
        
        
        
        // validate the first name entry
        const firstName = $("#first_name").val().trim();
        
        if (firstName == "") {
			$("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }
        
        $("#first_name").val(firstName);
        
        
        
        // validate the last name entry
        const lastName = $("#last_name").val().trim();
        
        if (lastName == "") {
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next().text("");
        }
        
        $("#last_name").val(lastName);
        
        
        
        // validate the phone number with a regular expression
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        
        const phone = $("#phone").val().trim();
        
        if (phone == "") { 
            $("#phone").next().text("This field is required.");
            isValid = false;
        } else if ( !phonePattern.test(phone) ) {
            $("#phone").next().text("Use 999-999-9999 format.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }
        
        $("#phone").val(phone);
        
        
        
        // prevent the submission of the form if any entries are invalid. preventDefault() will stop the submit button from sending the information
        if (isValid == false) {
            event.preventDefault();            
        }
        
    }); // END handler for the submit-button

});
"use strict";

// a function to move the smartphone-sized primary nav menu onscreen or offscreen
function navSlide() {
    
    const navBurger = document.querySelector('.globalPage__primaryNavburger');
        // creates a variable called "navBurger" set to the element that has the class "everyPage__primaryNavburger"
    
    const navList = document.querySelector('.globalPage__primaryNavList');
        // creates a variable called "navList" set to the element that has the class "everyPage__primaryNavList"
    
        navBurger.addEventListener('click',() => {
            // creates an event listener that's triggered when a user clicks the element from the "navBurger" variable above.

            //Toggle Nav Menu
            navList.classList.toggle('globalPage__primaryNavList--active');
                // upon clicking, a new class, "everyPage__primaryNavList--active" is toggled/added to the element defined in the above "navList" variable. this new class has a style rule that makes the menu move onscreen.
        

            //Animate Burger-lines
            navBurger.classList.toggle('burgerX');
                // upon clicking, a new class, "burgerX" is toggled/added to the element defined in the above "navBurger" variable. this new class has style rules that transform the horizontal lines of each div into diagonal x-shaped lines.
        });
}

navSlide(); //this calls the above function so it's ready for users to activate.



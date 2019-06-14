/**
 * Because functions are first-class objects, we can pass a function as an argument in another function
 *  and later execute that passed-in function or even return it to be executed later
 * Callback functions are derived from a programming paradigm known as functional programming.
 */

//Note that the item in the click method's parameter is a function, not a variable.
//The item is a callback function
$("#btn_1").click(function() {
    alert("Btn 1 Clicked");
});

var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function(eachName, index) {
    console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});
friends.reduce((current, next) => {
        return current > next ? current : next;
    })
    //note that forEach doesn't return anything 
    //Global variable
var generalLastName = "Clinton";

function getInput(options, callback) {
    allUserData.push(options);
    // Pass the global variable generalLastName to the callback function
    callback(generalLastName, options);
}


function getInput(options, callback) {
    allUserData.push(options);

    // Make sure the callback is a function
    if (typeof callback === "function") {
        // Call it, since we have confirmed it is callable
        callback(options);
    }
}


//Problem When Using Methods With The this Object as Callbacks
/*
we have to modify how we execute the callback function to preserve the this object context. 
Or else the this object will either point to the global window object (in the browser),
 if callback was passed to a global function. Or it will point to the object of the containing method.
 */

// Define an object with some properties and a method
// We will later pass the method as a callback function to another function
var clientData = {
    id: 094545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object
    setUserName: function(firstName, lastName) {
        // this refers to the fullName property in this object
        this.fullName = firstName + " " + lastName;
    }
}

function getUserInput(firstName, lastName, callback) {
    // Do other stuff to validate firstName/lastName here

    // Now save the names
    callback(firstName, lastName);
}
getUserInput("Barack", "Obama", clientData.setUserName);

console.log(clientData.fullName); // Not Set

// The fullName property was initialized on the window object
console.log(window.fullName); // Barack Obama


/**
 * Use the Call or Apply Function To Preserve this
We can fix the preceding problem by using the Call or Apply function 
(we will discuss these in a full blog post later). For now, know that every function in JavaScript has two methods:
 Call and Apply.
  And these methods are used to set the this object inside the function and to pass arguments to the functions.

Call takes the value to be used as the this object inside the function as the first parameter,
 and the remaining arguments to be passed to the function are passed individually (separated by commas of course).
  The Apply function’s first parameter is also the value to be used as the this object inside the function,
 while the last parameter is an array of values (or the arguments object) to pass to the function.
 */

//Note that we have added an extra parameter for the callback object, called "callbackObj"
function getUserInput(firstName, lastName, callback, callbackObj) {
    // Do other stuff to validate name here

    // The use of the Apply function below will set the this object to be callbackObj
    callback.apply(callbackObj, [firstName, lastName]);
    //callback.call(callbackObj,firsName,lastName);
}
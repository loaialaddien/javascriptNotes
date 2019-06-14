//Hoisting

// The reason undefined prints first is because the local variable name was hoisted to the top of the function
// Which means it is this local variable that get calls the first time.
// This is how the code is actually processed by the JavaScript engine:

function showName() {
    "use strict";
    var name; // name is hoisted (note that is undefined at this point, since the assignment happens below)
    console.log("First Name: " + name); // First Name: undefined

    name = "Ford"; // name is assigned a value

    // now name is Ford
    console.log("Last Name: " + name); // Last Name: Ford
}


// Both the variable and the function are named myName
var myName; 
function myName() {
    console.log("Rich");
}

// The function declaration overrides the variable name
console.log(typeof myName); // function


// But in this example, the variable assignment overrides the function declaration
var myName = "Richard"; // This is the variable assignment (initialization) that overrides the function declaration.

function myName() {
    console.log("Rich");
}

console.log(typeof myName); // string

//It is important to note that function expressions, such as the example below, are not hoisted.

var myName = function() {
    console.log("Rich");
}


//X in the console just out of the blue
// X is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM264:1
var x;
//x in the console 
//undefined

//////////////////////////////

var x = 21;
var girl = function() {
    console.log(x);
    var x = 20;
};
girl();

/**
 * Neither 21, nor 20, the result is undefined

It’s because JavaScript initialization is not hoisted.

(Why doesn’t it show the global value of 21? The reason is that when the function is executed,
     it checks that there’s a local x variable present but doesn’t yet declare it,
      so it won’t look for global one.)
 */



var b = 1;

function outer() {
    var b = 2

    function inner() {
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();
//Output to the console will be “3”.


function inner() {
    var b; // b is undefined
    b++; // b is NaN
    b = 3; // b is 3
    console.log(b); // output "3"
}
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



//////////////////////////////////////important 
x = y = "global";
(function() {
    x; // undefined
    y; // Reference error: y is not defined

    var x = "local";
    let y = "local";
}());

/**
 * The difference between var/function/function* declarations and let/const/class declara­tions is the initialisation.
The former are initialised with undefined or the (generator) function right when the binding is created at the top of the scope. 
The lexically declared variables however stay uninitialised. This means that a ReferenceError exception is thrown when you try to access it.
 It will only get initialised when the let/const/class statement is evaluated,
 everything before (above) that is called the temporal dead zone.

 Quoting ECMAScript 6 (ECMAScript 2015) specification's, let and const declarations section,

The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated.

So, to answer your question, yes, let and const hoist but you cannot access them before the actual declaration is evaluated at runtime.
 */

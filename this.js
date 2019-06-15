/////important
//////////arrow functions doesn't need to be binded
// https://www.codementor.io/dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc


var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        ​ // Notice we use "this" just as we used "he" in the example sentence earlier?:
        console.log(this.firstName + " " + this.lastName);​ // We could have also written this:​
        console.log(person.firstName + " " + person.lastName);
    }
}


//the this property— is a variable with the value of the object that invokes the function where this is used.
/*
The this reference ALWAYS refers to (and holds the value of) an object—a singular object
and it is usually used inside a function or a method,
 although it can be used outside a function in the global scope.
  Note that when we use strict mode, this holds the value of undefined in global functions 
  and in anonymous functions that are not bound to any object.


 */

// A very common piece of jQuery code

$("button").click(function (event) {
    // $(this) will have the value of the button ($("button")) object
    // because the button object invokes the click () method
    console.log($(this).prop("name"));
});


/*
I shall expound on the preceding jQuery example: 
The use of $(this), which is jQuery’s syntax for the this keyword in JavaScript,
is used inside an anonymous function, and the anonymous function is executed in the button’s click () method.
 The reason $(this) is bound to the button object is because the jQuery library binds $(this) to the object 
 that invokes the click method. Therefore, $(this) will have the value of the jQuery button ($(“button”)) object, 
 even though $(this) is defined inside an anonymous function that cannot itself access the “this” variable on the outer function.

Note that the button is a DOM element on the HTML page, and it is also an object; 
in this case it is a jQuery object because we wrapped it in the jQuery $() function.
    */

/**
     * 
     * When this is most misunderstood and becomes tricky
The this keyword is most misunderstood when 
1- we borrow a method that uses this, 
2- when we assign a method that uses this to a variable,
3- when a function that uses this is passed as a callback function, 
4- when this is used inside a closure—an inner function. 
     */
////////////////////////////////////////////1 borrowing a method ///////////////////////////////
var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    showFullName: function () {
        // The "context"
        console.log(this.firstName + " " + this.lastName);
    }
}

// The "context", when invoking showFullName, is the person object, when we invoke the showFullName () method on the person object.
// And the use of "this" inside the showFullName() method has the value of the person object,
person.showFullName(); // Penelope Barrymore

// If we invoke showFullName with a different object:
var anotherPerson = {
    firstName: "Rohit",
    lastName: "Khan"
};

// We can use the apply method to set the "this" value explicitly—more on the apply () method later.
// "this" gets the value of whichever object invokes the "this" Function, hence:
person.showFullName.apply(anotherPerson); // Rohit Khan

// So the context is now anotherPerson because anotherPerson invoked the person.showFullName ()  method by virtue of using the apply () method

/////////////////////////////////2////////////////////////////////

// We have a simple object with a clickHandler method that we want to use when a button on the page is clicked
var user = {
    data: [{
            name: "T. Woods",
            age: 37
        },
        {
            name: "P. Mickelson",
            age: 43
        }
    ],
    clickHandler: function (event) {
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1

        // This line is printing a random person's name and age from the data array
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }
}

// The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object
// And the output will be undefined because there is no data property on the button object
$("button").click(user.clickHandler); // Cannot read property '0' of undefined //we have to bind it, since we are passing the function
//solution 
$("button").click(user.clickHandler.bind(user));


////////////////////////Fix this inside closure//////////////////
var user = {
    tournament: "The Masters",
    data: [{
            name: "T. Woods",
            age: 37
        },
        {
            name: "P. Mickelson",
            age: 43
        }
    ],

    clickHandler: function () {
        // the use of this.data here is fine, because "this" refers to the user object, and data is a property on the user object.

        this.data.forEach(
            //anonymous functions can't access outerfunctions this
            //we can make a local variable for the outer function and let that = this; and use that in the anonymous function

            function (person) {
                // But here inside the anonymous function (that we pass to the forEach method),
                // "this" no longer refers to the user object.
                // This inner function cannot access the outer function's "this"

                console.log("What is This referring to? " + this); //[object Window]

                console.log(person.name + " is playing at " + this.tournament);
                // T. Woods is playing at undefined
                // P. Mickelson is playing at undefined
            })
    }

}

user.clickHandler(); // What is "this" referring to? [object Window]


///solution 

var user = {
    tournament: "The Masters",
    data: [{
            name: "T. Woods",
            age: 37
        },
        {
            name: "P. Mickelson",
            age: 43
        }
    ],

    clickHandler: function (event) {
        // To capture the value of "this" when it refers to the user object, we have to set it to another variable here:
        // We set the value of "this" to theUserObj variable, so we can use it later
        var theUserObj = this;
        this.data.forEach(function (person) {
            // Instead of using this.tournament, we now use theUserObj.tournament
            console.log(person.name + " is playing at " + theUserObj.tournament);
        })
    }

}

user.clickHandler();
// T. Woods is playing at The Masters
//  P. Mickelson is playing at The Master


///////////////////////////////////////////Fix this when method is assigned to a variable

// This data variable is a global variable
var data = [{
        name: "Samantha",
        age: 12
    },
    {
        name: "Alexis",
        age: 14
    }
];

var user = {
    // this data variable is a property on the user object
    data: [{
            name: "T. Woods",
            age: 37
        },
        {
            name: "P. Mickelson",
            age: 43
        }
    ],
    showData: function (event) {
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1

        // This line is adding a random person from the data array to the text field
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }

}

// Assign the user.showData to a variable
var showUserData = user.showData;

// When we execute the showUserData function, the values printed to the console are from the global data array,
// not from the data array in the user object
//
showUserData(); // Samantha 12 (from the global data array)

// Solution for maintaining this when method is assigned to a variable:
// We can fix this problem by specifically setting the this value with the bind method:


// Bind the showData method to the user object
var showUserData = user.showData.bind(user);

// Now we get the value from the user object, because the this keyword is bound to the user object
showUserData(); // P. Mickelson 43


function IsReversed(name) {
    let nameReversed = name.split('').reverse().join('');
    return name === nameReversed;

}


/////fuckedup this 

var length = 10;

function fn() {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function (fn) {
        fn(); //10  window.length
        arguments[0](); //2   arguments.length
    }
};

obj.method(fn, 1);




//////////////////////arrow functions doesn't rebind this 

let person = {
    talks() {
        console.log(this); //person object

        setTimeout(function () {
            console.log(this); //window object
        }, 1000);
    }
}
let person = {
    talks() {
        console.log(this); //person object

        setTimeout(() => {
            console.log(this); //person object, it will inherit the scope of the context it was written at
        }, 1000);
    }
}
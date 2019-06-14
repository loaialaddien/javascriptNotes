// defining and instantiating an object :

// - It's important to note that there are no classes in JavaScript. Functions can be used to somewhat simulate classes,
//      but in general JavaScript is a class-less language.
// - Everything is an object. And when it comes to inheritance, objects inherit from objects, not classes from classes .

// // 1. Using a function :
// You define a normal JavaScript function and then create an object by using the new keyword.
// To define properties and methods for an object created using function(), you use the this keyword

function Apple(type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}

// anti-pattern! keep reading...
function getAppleInfo() {
    return this.color + ' ' + this.type + ' apple';
}

var apple = new Apple('macintosh');
apple.color = "reddish";
alert(apple.getInfo());

// ================================================================================================
// 2. Using object literals --> 
var obj = {};
// ================================================================================================
// 3. Singleton using a function

var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
}

apple.color = "reddish";
alert(apple.getInfo());

// ================================================================================================
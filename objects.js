///objects 
/*
Object Data Properties Have Attributes
Each data property (object property that store data) has not only the name-value pair, 
but also 3 attributes (the three attributes are set to true by default):
— 
Configurable Attribute: Specifies whether the property can be deleted or changed.
— Enumerable: Specifies whether the property can be returned in a for/in loop.
— Writable: Specifies whether the property can be changed.
 */

// This is an empty object initialized using the object literal notation
var myBooks = {};

// This is an object with 4 items, again using object literal
var mango = {
    color: "yellow",
    shape: "round",
    sweetness: 8,

    howSweetAmI: function() {
        console.log("Hmm Hmm Good");
    }
}

//object constructor 
var mango = new Object();
mango.color = "yellow";
mango.shape = "round";
mango.sweetness = 8;

mango.howSweetAmI = function() {
    console.log("Hmm Hmm Good");
}

//Constructor Pattern for Creating Objects
function Fruit(theColor, theSweetness, theFruitName, theNativeToLand) {

    this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.nativeToLand = theNativeToLand;

    this.showName = function() {
        console.log("This is a " + this.fruitName);
    }

    this.nativeTo = function() {
        this.nativeToLand.forEach(function(eachCountry) {
            console.log("Grown in:" + eachCountry);
        });
    }


}


//Prototype Pattern for Creating Objects
function Fruit() {

}

Fruit.prototype.color = "Yellow";
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";

Fruit.prototype.showName = function() {
    console.log("This is a " + this.fruitName);
}

Fruit.prototype.nativeTo = function() {
    console.log("Grown in:" + this.nativeToLand);
}


//cloning objects 
var obj = { a: 1, b: 2 }
var objclone = Object.assign({}, obj);

// Object.clone() will just do a shallow copy, not a deep copy.
//  This means that nested objects aren’t copied. They still refer to the same nested objects as the original:




/////referencing another key from the same object
// This can be achieved by using constructor function instead of literal

var o = new (function() {
  this.foo = "it";
  this.bar = this.foo + " works";
})();

alert(o.bar);

///or
var obj = {
  key1: "it ",
  key2: function() {
    return this.key1 + " works!";
  }
};

alert(obj.key2());

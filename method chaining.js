// What is Method Chaining?
//  is a technique that can be used to simplify code in scenarios that involve calling multiple functions on the same object consecutively.
// This is an example of how you can use method chaining when using jQuery.
// - mn el a5er law 3ndy object mo3yn 3awz atb2 3leh kza function .. fa bdl el kza line ely hktbhom la2 a3ml chaining a7sn .
// ex:
$('#my-div').css('background', 'blue').height(100).fadeIn(200);

// Implementing Method Chaining
// Let's rewrite the Kitten class with the ability to chain methods :

// define the class
var Kitten = function() {
    this.name = 'Garfield';
    this.color = 'brown';
    this.gender = 'male';
};

Kitten.prototype.setName = function(name) {
    this.name = name;
    return this;
};

Kitten.prototype.setColor = function(color) {
    this.color = color;
    return this;
};

Kitten.prototype.setGender = function(gender) {
    this.gender = gender;
    return this;
};

Kitten.prototype.save = function() {
    console.log(
        'saving ' + this.name + ', the ' +
        this.color + ' ' + this.gender + ' kitten...'
    );

    // save to database here...

    return this;
};

// --------------------------------

// WITHOUT CHAINING

var bob = new Kitten();

bob.setName('Bob');
bob.setColor('black');
bob.setGender('male');

bob.save();

// OUTPUT:
// > saving Bob, the black male kitten...


///////////////////
// WITH CHAINING

new Kitten()
    .setName('Bob')
    .setColor('black')
    .setGender('male')
    .save();

// OUTPUT:
// > saving Bob, the black male kitten...

class Cat {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    setGender(gender) {
        this.gender = gender;
        return this;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
}

let y = new Cat();
y.setColor("blue").setGender("male").setName("hamada");

// Cat  { name: "hamada", age: undefined, color: "blue", gender: "male" }



class Animal {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    changeName(name) {
        this.name = name;
        return this;
    }
    setAge(age) {
        this.age = age;
        return this;

    }
}

let lion = new Animal("fluffy", "male");
lion.changeName("Asd aL ghaba");
lion.setAge(12);


let giraffe = new Animal("soa3d", "female");

giraffe.changeName("fatma").setAge(12);
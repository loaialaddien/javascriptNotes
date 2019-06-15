// https://medium.com/@thejasonfile/borrowing-methods-from-a-function-in-javascript-713a0beed40d

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.numWalksPerDay = 2;
}

function Cat(name, age) {
    Dog.call(this, name, age);
    this.numWalksPerDay = 0;
}

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function() {
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());

console.log(hero.getSecretIdentity());
console.log(stoleSecretIdentity.bind(hero)()) ;

//undefined
//John Doe
//John Doe

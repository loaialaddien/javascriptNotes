var canAlligatorsFly = false;

function isItFlying() {
    canAlligatorsFly = true;

    if (canAlligatorsFly) {
        console.log("Yeah I'm flying");
    }
}
isItFlying(); // Yeah I'm flying

const alligatorColor = "green";

function getMyColor() {
    alligatorColor = "yellow"; // This part throws an error

    return alligatorColor;
}

//const just prevents reassignment but doesn't forbid changing
const reptiles = ['alligators', 'crocs'];

reptiles.push('snakes');

console.log(reptiles); // ['alligators', 'crocs', 'snakes']

const alligator = {
    canItFly: false
};

alligator.canItFly = true;
console.log(alligator.canItFly); // true


//Object.freeze() prevents modification or extension to the existing value of an object.
let alligator4 = {
    canItFly: false
};

Object.freeze(alligator);
alligator.canItFly = true;

console.log(alligator.canItFly); // false, the value is not modified
//A quick note though, Object.freeze does allow reassignment:

let alligator2 = {
    canItFly: false
};

Object.freeze(alligator);
alligator = {
    pi: 3.14159
};

console.log(alligator) // {pi: 3.14159}


const alligator3 = {
    canItFly: false
};

Object.freeze(alligator);
alligator.canItFly = true; // This is ignored
alligator = {
    pi: 3.14
}; // This will throw an TypeError

console.log(alligator); // {canItFly: false}
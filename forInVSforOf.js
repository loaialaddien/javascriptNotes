//Use for…of to iterate over the values in an iterable, like an array for example:

let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (let animal of animals) {
    // Random name for our animal
    let nameIdx = Math.floor(Math.random() * names.length);

    console.log(`${names[nameIdx]} the ${animal}`); //using `` and ${} is called string template
}
// Henry the 🐔
// Melvin the 🐷
// Henry the 🐑
// Billy Bob the 🐇

let str = 'abcde';

for (let char of str) {
    console.log(char.toUpperCase().repeat(3));
}

//You can also iterate over maps, sets, generators, DOM node collections and the arguments object available inside a functions.

///////////////////////////////
//Use for…in to iterate over the properties of an object (the object keys):
let oldCar = {
    make: 'Toyota',
    model: 'Tercel',
    year: '1996'
};

for (let key in oldCar) {
    console.log(`${key} --> ${oldCar[key]}`);
}

// make --> Toyota
// model --> Tercel

let stri = 'Turn the page';

for (let index in str) {
    console.log(`Index of ${stri[index]}: ${index}`);
}

// Index of T: 0
// Index of u: 1
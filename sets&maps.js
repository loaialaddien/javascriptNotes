/**
 * Sets are a new object type with ES6 (ES2015) that allow to create collections of unique values. 
 * The values in a set can be either simple primitives like strings or integers, but more complex object types like object literals or arrays can also be part of a set.
 */
let animals = new Set();

animals.add('🐷');
animals.add('🐼');
animals.add('🐢');
animals.add('🐿');
console.log(animals.size); // 4
animals.add('🐼');
console.log(animals.size); // 4

console.log(animals.has('🐷')); // true
animals.delete('🐷');
console.log(animals.has('🐷')); // false

animals.forEach(animal => {
    console.log(`Hey ${animal}!`);
});

// Hey 🐼!
// Hey 🐢!
// Hey 🐿!

animals.clear();
console.log(animals.size); // 0


let partyItems = new Set(['🍕', '🍾', '🎊']);
let items = partyItems.values();

console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next().done);

// Object {
//   done: false,
//   value: "🍕"
// }

// Object {
//   done: false,
//   value: "🍾"
// }

// Object {
//   done: false,
//   value: "🎊"
// }

// true


/////////////////////////maps/////////////////
/**
 * Unlike with objects, map keys can be of any type, 
 * even objects or functions. 
 * It’s also easy to get the size of a map, 
 * while it’s not as straightforward for objects. On top of that, 
 * with maps we can iterate in the order in which the values were added, 
 * contrary to objects where there’s no guarantee about the order.
 */

let things = new Map();

const myFunc = () => '🍕';

things.set('🚗', 'Car');
things.set('🏠', 'House');
things.set('✈️', 'Airplane');
things.set(myFunc, '😄 Key is a function!');

things.size; // 4

things.has('🚗'); // true

things.has(myFunc) // true
things.has(() => '🍕'); // false, not the same reference
things.get(myFunc); // '😄 Key is a function!'

things.delete('✈️');
things.has('✈️'); // false

things.clear();
things.size; // 0

// setting key-value pairs is chainable
things.set('🔧', 'Wrench')
      .set('🎸', 'Guitar')
      .set('🕹', 'Joystick');

const myMap = new Map();

// Even another map can be a key
things.set(myMap, 'Oh gosh!');
things.size; // 4
things.get(myMap); // 'Oh gosh!'


const funArray = [
    ['🍾', 'Champagne'],
    ['🍭', 'Lollipop'],
    ['🎊', 'Confetti'],
  ];
  
  let funMap = new Map(funArray);
  funMap.get('🍾'); // Champagne


  let activities = new Map();

activities.set(1, '🏂');
activities.set(2, '🏎');
activities.set(3, '🚣');
activities.set(4, '🤾');

for (let [nb, activity] of activities) {
  console.log(`Activity ${nb} is ${activity}`);
}

// Activity 1 is 🏂
// Activity 2 is 🏎
// Activity 3 is 🚣
// Activity 4 is 🤾
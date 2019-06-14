var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function(eachName, index) {
    console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});
friends.reduce((current, next) => {
    return current > next ? current : next;
});

friends.splice(-1);

let name = "fatma";
let x = name.split('');


//level
//lolol

function IsReverse(name) {
    let x = name.splice('').reverse().join('');
    return x === name;
}
var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function(eachName, index) {
    console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});
friends.reduce((current, next) => {
    return current > next ? current : next; //this will loop through the array and get the biggest value
});

friends.splice(-1); //will delete the last element of the array 


let name = "fatma"; 
let x = name.split('');


//level
//lolol

function IsReverse(name) {
    let x = name.splice('').reverse().join('');
    return x === name;
}
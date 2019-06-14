(function() {
    try {
        throw new Error();
    } catch (x) {
        var x = 1,
            y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

(function() {
    var x, y; // outer and hoisted
    try {
        throw new Error();
    } catch (x /* inner */ ) {
        x = 1; // inner x, not the outer one
        y = 2; // there is only one y, which is in the outer scope
        console.log(x /* inner */ );
    }
    console.log(x);
    console.log(y);
})();


//variable scope
//No Block-Level Scope
//Local Variables Have Priority Over Global Variables in Functions


var name = "Richard";
// the blocks in this if statement do not create a local context for the name variable
if (name) {
    name = "Jack"; // this name is the global name variable and it is being changed to "Jack" here
    console.log(name); // Jack: still the global variable
}

// Here, the name variable is the same global name variable, but it was changed in the if statement
console.log(name); // Jack



//////////////////
for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000);
}
//5 5 5 5 5

//solutions
for (let i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000);
}
//0 1 2 3 4

for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000);
    })(i);
}
//0 1 2 3 4
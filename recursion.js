// Functions : recursion
// arguments.callee refers to the function that hosts the "arguments" variable, so it can be used to recurse anonymous functions:
var recurse = function() {
  if (condition) arguments.callee(); //calls recurse() again
}
// That's useful if you want to do something like this:
//do something to all array items within an array recursively
myArray.forEach(function(item) {
  if (item instanceof Array) item.forEach(arguments.callee)
  else {/*...*/}
});

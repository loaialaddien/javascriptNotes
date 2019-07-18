// NOTE Memoization choose speed calculations over memory consumbtion
// This function caches the result
const memoizeFactorial = () => {
  const previouslyFetched = {};

  return function calc(num) {
    if (previouslyFetched[num]) {
      //   console.log("cached before");
      return previouslyFetched[num];
    }
    // For loop used in performance measure purpose
    for (let i = 0; i < 10e5; i++) {}

    const result = num ? num * calc(num - 1) : 1;
    previouslyFetched[num] = result;
    return result;
  };
};

const memFact = memoizeFactorial();
const normalFact = num => {
  // For loop used in performance measure purpose
  for (let i = 0; i < 10e5; i++) {}
  return num ? num * normalFact(num - 1) : 1;
};
const startMemo = Date.now();
console.log("First result : ", memFact(85));
console.log(Date.now() - startMemo);
memFact(86);
memFact(87);
memFact(88);
memFact(88);
memFact(88);
memFact(88);
memFact(88);
memFact(50);
console.log(Date.now() - startMemo);

const start = Date.now();
console.log("Normal function");
console.log("First result : ", normalFact(85));
console.log(Date.now() - start);
normalFact(86);
normalFact(87);
normalFact(88);
normalFact(88);
normalFact(88);
normalFact(88);
normalFact(88);
console.log(Date.now() - start);

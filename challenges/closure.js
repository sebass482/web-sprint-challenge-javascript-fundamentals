// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//const internal was declared within the same block as nestedFunction, and as variables defined with const are block-scoped, nestedFunciton is able to look outside its scope once it doesn't find const internal internally.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function summation(parameter){
  let newNum=0;
  for(let i=0;i<=parameter;i++){
    newNum = newNum + i
}
  return newNum
}
console.log(summation(4))
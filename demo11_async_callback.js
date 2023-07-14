/**
 * * Async in ES: call-back hell
 */

'use strict'

console.clear(); 

//? what is call-back function

let value = 1; 
const func_01 = () => {
  console.log(value);

  setTimeout(() => {
    // call-back function (nested function) is here
    value++; 
    console.log("Inside setTimeout(): ", value);
  }, 1000);

  console.log("Outside setTimeout(): ", value);
}

func_01();
/**
 * * Function in ES6
 */

'use strict'

console.clear();

//? traditional function
function sum(a, b) {
  return a + b;
}

let a = 10; 
let b = '20'; 
console.log(a, " + ", b, " = ", sum(a, b));

//? pass by value -> default ES/JS always pass value to function
function double(value) {
  value = value * 2;
  console.log('-> value inside function is ', value);
}

let c = 8; 
console.log('c have value outside function: ', c);
double(c);
console.log('c have value outside function: ', c);

//? pass by reference -> pass object to function
function swap(obj_a, obj_b) {
  let obj_temp = { value: obj_a.value }; 
  obj_a.value = obj_b.value; 
  obj_b.value = obj_temp.value;
  console.log(`-> Inside the function: obj a = ${obj_a.value} - obj b = ${obj_b.value}`);
}

let obj_a = { value : 888 };
let obj_b = { value : 567 };

console.log(`Outside the function: obj a = ${obj_a.value} - obj b = ${obj_b.value}`);
swap(obj_a, obj_b);
console.log(`Outside the function: obj a = ${obj_a.value} - obj b = ${obj_b.value}`);

//? default parameter
function calculate(value, delta = 1.0) {
  return value * value + delta;
}

let d = 100;
console.log("First calculate: ", calculate(d));
console.log("Second calculate: ", calculate(d, 2.5));

//? Anonymous function
const minus = function (a, b) {
  return a - b;
}

console.log("10 - 2 = ", minus(10, 2));

//? arrow function
console.log("-- arrow function --"); 
const sum_v_2 = (a, b) => { 
  return a + b; 
};
console.log("10 + 2 = ", sum_v_2(10, 2));

console.log("-- special case of arrow function --");
let arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log("-- case 01 --")
arr.forEach(function(item) {
  console.log(item);
})

console.log("-- case 02 --")
arr.forEach((item) => {
  console.log(item);
})

console.log("-- case 03 --")
arr.forEach(item => console.log(item));     //! Lamda syntax

console.log("-- case 04 --")
const arrow_sum = (a, b = 20, c = 30) => a + b + c;
console.log(arrow_sum(50, 60, 70));
console.log(arrow_sum(50, 60));
console.log(arrow_sum(50));
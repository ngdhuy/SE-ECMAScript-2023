/**
 * * Promise in ES
 */

'use strict'
console.clear();

//? chaining promise
const p_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P_1 is resolved');
  }, 3000);
});

const p_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P_2 is resolved');
  }, 2000);
});

const p_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P_3 is resolved');
  }, 1000);
});

p_1.then(data => {
  console.log(data);
  return p_2;
})
.then(data => {
  console.log(data); 
  return p_3;
})
.then(data => {
  console.log(data);
});
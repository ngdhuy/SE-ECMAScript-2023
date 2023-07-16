/**
 * * async and await in ES
 */

'use strict'
console.clear();

//? define Promise function
const resolve_after_two_second = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Resolved after TWO seconds');
    }, 2000);
  });
}

// console.log('Calling');
// resolve_after_two_second()
//   .then(data => {
//     console.log(data);
//   }).then(() => {
//     console.log('DONE');
//   });

async function async_function() {
  console.log('Calling'); 
  const result = await resolve_after_two_second();
  console.log(result);
  console.log('DONE');
}

console.log('STARTING');
async_function();
console.log('COMPLETED')
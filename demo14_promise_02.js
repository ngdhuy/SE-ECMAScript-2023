/**
 * promise in ES
 */

'use strict'
console.clear();

console.log('----- Example 02 -----');

const rand_value = Math.floor(Math.random() * 10);

const p_3 = new Promise((res, rej) => {
  if(rand_value % 2 == 0)
    res('P_3 is resolved'); 
  else
    rej('p_3 is rejected');
});

p_3.then(success => {
  console.log(success);
}).catch(error => {
  console.log(error);
}).finally(() => {
  console.log("=> Finally");
});
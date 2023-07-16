/**
 * * promise in ES 
 */

'use strict'
console.clear();

const p_1 = new Promise((resolve, reject) => {
  resolve(100);
}); 

p_1.then(data => {
  console.log('P_1 is first: ', data);
  return data + 100;
}).then(data => {
  console.log('P_1 is second: ', data);
}).then(data => {
  console.log('P_1 is third: ', data);
}).catch(error => {
  console.log(error);
}).finally(() => {
  console.log('DONE');
})
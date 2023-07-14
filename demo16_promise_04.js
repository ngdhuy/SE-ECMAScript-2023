/**
 * * promise in ES
 */

'use strict'
console.clear(); 

const p_1 = Promise.resolve(100); 
const p_2 = Promise.reject(true); 
const p_3 = Promise.reject('Error');

const p_4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P_4 is resolved');
  }, 1000);
})

Promise.all([p_1, p_3, p_4])
.then(data => {
  console.log('=> ', data);
})
.catch(error => {
  console.log(error);
})

Promise.all([p_1, p_2, p_3, p_4])
.then(data => {
  console.log('=> ', data);
})
.catch(error => {
  console.log(error);
})

Promise.race([p_1, p_3, p_4])
.then(data => {
  console.log('=> ', data);
})
.catch(error => {
  console.log(error);
})

Promise.race([p_1, p_2, p_3, p_4])
.then(data => {
  console.log('=> ', data);
})
.catch(error => {
  console.log(error);
})

Promise.allSettled([p_1, p_3, p_4])
.then(data => {
  console.log('=> ', data);
})
.catch(error => {
  console.log(error);
})

Promise.allSettled([p_1, p_2, p_3, p_4])
.then(data => {
  console.log('=> ', data);
})
.catch(error => {
  console.log(error);
})
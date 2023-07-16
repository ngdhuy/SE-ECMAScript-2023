/**
 * * promise in es
 */

'use strict'
console.clear();

setTimeout(() => {
  console.log('setTime is DONE');
}, 0);

const resolving_1 = Promise.resolve(); 
const rejecting_1 = Promise.reject(); 
const resolving_2 = Promise.resolve(); 
const rejecting_2 = Promise.reject(); 

resolving_1
  .then(() => { console.log('Resolve then 1 -> OK'); })
  .then(() => { console.log('Resolve then 2 -> OK'); })
  .catch(() => { console.log('Catch 01'); })

rejecting_1
  .then(() => { console.log('Reject then 1 -> OK'); })
  .then(() => { console.log('Reject then 2 -> OK'); })
  .catch(() => { console.log('Catch 02'); })

resolving_2
  .then(() => { console.log('Resolving 1 then 1 THEN'); })
  .catch(() => { console.log('Resolving 1 then 1 CATCH'); })
  .finally(() => { console.log('Resolving 1 then 1 FINALLY'); })

rejecting_2
  .then(() => { console.log('Rejecting 1 then 1 THEN'); })
  .catch(() => { console.log('Rejecting 1 then 1 CATCH'); })
  .finally(() => { console.log('Rejecting 1 then 1 FINALLY'); })
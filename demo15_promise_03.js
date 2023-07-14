/**
 * * promise in ES
 */

'use strict'
console.clear(); 

const return_money = () => {
  console.log('return money'); 

  return new Promise((resolve, reject) => {
    let is_happy = Math.random() >= 0.5;
    if(is_happy) 
      return resolve(1000); 
    else
      return reject('Do not happy, do not return');
  })
}

return_money()
.then(money => {
  setTimeout(() => {
    console.log('Money is return');
  }, 500);
})
.then(() => {
  setTimeout(() => {
    console.log('Come back HOME');
  }, 100)
})
.catch(debt => {
  console.log('Money go out forever ^_^! because ', debt);
})
.finally(() => {
  console.log('--- go HOME alone ---');
})
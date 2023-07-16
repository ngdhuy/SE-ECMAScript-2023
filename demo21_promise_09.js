/**
 * * promise is es
 */

'use strict'
console.clear();

const borrow_money = () => {
  return new Promise(resolve => {
    console.log('1. Borrow money');
    resolve(100);
  })
}

const hold_girlfriend_birthday = (money) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('2. Hold girlfriend birthday'); 
      resolve(`=> OK with ${money}`);
    }, 3000);
  });
}

const go_to_relax = () => { 
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('3. Go to BAR...'); 
      resolve('=> Comeback home');
    }, 500);
  })
}

// let money           = borrow_money(); 
// let hold_birthday   = hold_girlfriend_birthday(money);
// let after_birthday  = go_to_relax();

borrow_money().then(success => {
  return hold_girlfriend_birthday(success);
}).then(data => {
  console.log(data);
  return go_to_relax();
}).then(data => {
  console.log(data);
}).finally(() => { console.log('DONE'); })
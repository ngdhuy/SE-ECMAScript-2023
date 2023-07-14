/**
 * * Resolve call-back hell problem
 * * ES use PROMISE
 */

'use strict'

console.clear();

//? problem statement
const borrow_money = () => {
  console.log('borrow money'); 
  return 100;
}

const hold_birth_for_girlfriend = (money) => {
  console.log('hold birthday for girlfriend'); 
  return (`OK with ${money} dollar`);
}

const go_to_relax = () => {
  console.log('go to BAR...');
}

let money = borrow_money();
console.log(money);

let girlfriend_birthday = hold_birth_for_girlfriend(money);
console.log(girlfriend_birthday);

let result_after_birthday = go_to_relax();


//? Promise status 
/**  
 * * - pending 
 * * - Fulfilled (resolve)
 * * - Rejected
 */
//? Promise properties
/**
* * - constructor(call-back function)
*/
//? Promise method
/**
 * * - then(onFulfilled, onRejected)
 * * - catch(onRejected)
 * * - finally(onFinally)
 */

console.log('----- Example 01 -----');

const p_1 = new Promise((resolve, reject) => {
  resolve('P_1 is resolved');
});

p_1.then(success => console.log('P_1 is success - ', success));

const p_2 = new Promise((resolve, reject) => {
  reject('P_2 is rejected');
})

p_2.catch(error => console.log('P_2 ise fail - ', error));
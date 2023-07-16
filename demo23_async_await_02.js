/**
 * * async... await
 */

'use strict'
console.clear();

async function foo() {
  return 1;
}

console.log(foo());

//? compare Async vs Promise

const p = new Promise((resolve, reject) => resolve(1)); 

const a = async() => { return p; }

const b = () => { return Promise.resolve(p); }

console.log(p); 
console.log(a);
console.log(b);

console.log(p === b());
console.log(p === a()); 
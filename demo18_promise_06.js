/**
 * * promise in ES
 */

'use strict'
console.clear();

const resolve_promise = new Promise((resolve, reject) => {
  resolve('Promise is resolved');
});

const reject_promise = new Promise((resolve, reject) => {
  reject('Promise is rejected');
});

reject_promise.then(() => {
  throw new Error('Oh no no ERROR');
}, error => {
  console.log('Reject promise: ', error);
})

resolve_promise.then(() => {
  throw new Error('Oh no no ERROR');
}). catch(error => {
  console.log('Resolve promise: ', error);
})


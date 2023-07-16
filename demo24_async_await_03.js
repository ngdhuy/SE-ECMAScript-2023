/**
 * * async... await
 */

'use strict'
console.clear()

async function f_sequence_first() {
  const result_01 = await new Promise(resolve => {
    console.log('result_01 is called');
    setTimeout(() => resolve(100), 1000);
  })

  const result_02 = await new Promise(resolve => {
    console.log('result_02 is called'); 
    setTimeout(() => resolve(200), 500);
  })
}

// f_sequence_first();

const f_sequence_second = async () => {
  const result_01 = new Promise(resolve => setTimeout(() => { console.log('Resolved'); resolve(1000); }, 1000));
  const result_02 = new Promise((resolve, reject) => setTimeout(() => { console.log('Reject'); reject(2000); }, 2000));
  const result = [await result_01, await result_02];
  // return result;
}

f_sequence_second()
  .then(data => console.log(data))
  .catch(error => console.log('Error: ', error) )

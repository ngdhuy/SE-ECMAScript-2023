/**
 * * Statement in ES6
 */

console.clear();

//? if... else...
let a = 10; 
if (a % 2 === 0)
  console.log(a, 'is even');
else
  console.log(a, 'is odd');

//? assignment with condition 
let b = (a % 2 === 0) ? 0 : 1;
console.log('b = ', b);

//? switch... case
let c = 0; 
switch(c) {
  case 1:
    console.log(c, ' is one'); 
    break; 
  case 2:
    console.log(c, ' is two');
  case 3:
    console.log(c, ' is three');
    break;
  default:
    console.log(c, ' is not inside set');;
}

//? loop statement -> for ... 
let arr = [1, 2, 3, 4, 5];

console.log("-- for ... --");
for(let i = 0; i < arr.length; i++)
  console.log(arr[i]);

console.log("-- while ... ---"); 
let i = 0; 
while (i < arr.length) {
  if(i < 3)
    console.log(arr[i++]);
  else
    break;
}

//? loop statement -> do... while...
console.log("-- do ... while ... --"); 
i = 0; 
do {
  if(arr[i] === 4)
    break;
  else
    console.log(arr[i]);
  i++;
} while(i < arr.length);

//? loop statement -> foreach ...
console.log("-- array.forEach() --"); 
arr.forEach(function(item) {
  console.log(item);
});

//? loop statement -> for ... in ... 
console.log("-- for ... in ... --"); 
for(let id in arr)
  console.log(arr[id]);

//! use for ... in to get information/properties of object
console.log("-- log object info --"); 
let obj = {
  id    : 1, 
  name  : 'Product supper VIP',
  price : 156.3 
}; 

for(let key in obj) {
  console.log(key, ' : ', obj[key]);
}

//? loop statement -> for ... of ...
console.log("-- for ... of ... --");
for(let item of arr)
  console.log(item);
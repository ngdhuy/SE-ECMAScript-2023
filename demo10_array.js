/**
 * Array in ES
 */

'use strict'
console.clear();

let a = [1, 2, 3, 4, 5];

console.log(a);

//? append item 99 to array
a.push(99);
console.log(a);

//? get all item with forEach method
a.forEach(item => {
  if(item > 2) console.log(item);
})

//? reverse array
a.reverse();
console.log(a);

//? sort array
a.sort();
console.log(a);

//? insert and remove
//! at TAIL
a.push([888, 66, [1, 2, 3]]);
console.log(a);

let num = a.pop();
console.log(a);
console.log(num);

//! at HEAD
a.unshift([11, 22]);
console.log(a);

num = a.shift();
console.log(a);
console.log(num);

//! at MIDDLE
console.clear();
console.log(a);
let b = a.splice(2, 4);
console.log(a); 
console.log(b);

console.clear();
console.log(a);
a.splice(6, 2, 'a', 'b', 'c');
console.log(a);

let c = a.slice(2, 5);
console.log(a);
console.log(c);

//? Using modern method of array in ECMA Script
console.clear();
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a);

//! MAP
a.map((item, index) => console.log(`Element: ${item} at index of ${index}`));

console.clear();

//! FILTER
let arr = a.filter(item => item > 5);
console.log(a);
console.log(arr);

console.clear();

//! REDUCE
let sum_of_arr = a.reduce((result, item) => result + item);
console.log(a);
console.log(sum_of_arr);

console.clear(); 

//! Iterator protocol
let str = 'abcdef';
let arr_str = [...str];
console.log(str);
console.log(arr_str);

arr_str = Array.from(str);
console.log(arr_str);

console.clear();

//! advance with Symbol.iterator
arr = [1, 2, 3, 4, 5][Symbol.iterator]();
console.log(arr);

do {
  var temp = arr.next();
  if(temp.done === true)
    break;
  else
    console.log(temp.value);
} while (temp.done === false);

console.clear();

//! apply iterator protocol
const generator = (value) => {
  return {
    [Symbol.iterator]() {
      let i = 0; 
      return {
        next() {
          return {
            done  : (i > value) ? true : false, 
            value : i+=2
          }
        }
      }
    }
  }
}

for(let item of generator(10)) {
  console.log(item);
}

console.log(generator(5));
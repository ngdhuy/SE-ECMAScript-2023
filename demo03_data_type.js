/**
 * * Data type in ECMA Script
 */

console.clear();

//? Prime datatype
let a = 4;                // a is integer
console.log(a, typeof(a));

let b = 2.5;              // b is float
console.log(b, typeof(b));

let c = 'hello world';    // c is string
console.log(c, typeof(c));

let d = {
  id: 1, 
  name: 'Product', 
  price: 2.5
}                         // d is object (JSON object)
console.log(d, typeof(d));

let e = [1, 2, 3, 4, 5];  // e is array (object)
console.log(e, typeof(e));

let f = true;             // f is boolean
console.log(f, typeof(f));

let g = null;             // g is null (object)
console.log(g, typeof(g));

let h = undefined;        // h is undefine
console.log(h, typeof(h));

//? check datatype of variable
//!   check is a NUMBER
console.log(a, " is a Number -> ", Number.isFinite(a));
console.log(b, " is a Number -> ", Number.isFinite(b));
console.log(c, " is a Number -> ", Number.isFinite(c));
console.log(d, " is a Number -> ", Number.isFinite(d));
console.log(e, " is a Number -> ", Number.isFinite(e));
console.log(f, " is a Number -> ", Number.isFinite(f));
console.log(g, " is a Number -> ", Number.isFinite(g));
console.log(h, " is a Number -> ", Number.isFinite(h));

console.log("---------------------------------------");

//!   check is a NUMBER
console.log(a, " is NOT a Number -> ", isNaN(a));
console.log(b, " is NOT a Number -> ", isNaN(b));
console.log(c, " is NOT a Number -> ", isNaN(c));
console.log(d, " is NOT a Number -> ", isNaN(d));
console.log(e, " is NOT a Number -> ", isNaN(e));
console.log(f, " is NOT a Number -> ", isNaN(f));
console.log(g, " is NOT a Number -> ", isNaN(g));
console.log(h, " is NOT a Number -> ", isNaN(h));

console.log("---------------------------------------");

//!   check is a INTEGER NUMBER
console.log(a, " is a INTEGER Number -> ", Number.isInteger(a));
console.log(b, " is a INTEGER Number -> ", Number.isInteger(b));
console.log(c, " is a INTEGER Number -> ", Number.isInteger(c));
console.log(d, " is a INTEGER Number -> ", Number.isInteger(d));
console.log(e, " is a INTEGER Number -> ", Number.isInteger(e));
console.log(f, " is a INTEGER Number -> ", Number.isInteger(f));
console.log(g, " is a INTEGER Number -> ", Number.isInteger(g));
console.log(h, " is a INTEGER Number -> ", Number.isInteger(h));

console.log("---------------------------------------");

//!   check is a FLOAT NUMBER
console.log(a, " is a Float Number -> ", Number.isFinite(a) && !Number.isInteger(a));
console.log(b, " is a Float Number -> ", Number.isFinite(b) && !Number.isInteger(b));
console.log(c, " is a Float Number -> ", Number.isFinite(c) && !Number.isInteger(c));
console.log(d, " is a Float Number -> ", Number.isFinite(d) && !Number.isInteger(d));
console.log(e, " is a Float Number -> ", Number.isFinite(e) && !Number.isInteger(e));
console.log(f, " is a Float Number -> ", Number.isFinite(f) && !Number.isInteger(f));
console.log(g, " is a Float Number -> ", Number.isFinite(g) && !Number.isInteger(g));
console.log(h, " is a Float Number -> ", Number.isFinite(h) && !Number.isInteger(h));

console.log("---------------------------------------");

//! convert number to string
let i = a.toString();
console.log(a, " is a ", typeof(a), " -> ", i, " is a ", typeof(i));

let j = b.toString(); 
console.log(b, " is a ", typeof(b), " -> ", j, " is a ", typeof(j));

console.log("---------------------------------------");

//! convert string to number
let k = "8"; 
let i_k = parseInt(k);        // parse string to integer
console.log(k, " is a ", typeof(k), " -> ", i_k, " is a ", typeof(i_k));

let l = "9.5";
let f_l = parseFloat(l);      // parse string to float
console.log(l, " is a ", typeof(l), " -> ", f_l, " is a ", typeof(f_l));

//? condition in ECMA Script (ES)

x = undefined; y = undefined;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = null; y = null;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = false; y = false;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = true; y = true;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = true; y = false;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = 'food'; y = 'food';
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = 0; y = 0;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = 0; y = false;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = true; y = 1;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = ""; y = false;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = ""; y = 0;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = 0; y = "0";
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = "0"; y = false;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = new String("food"); y = "food";
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

x = null; y = undefined;
console.log(x, " & ", y, "\t== ", x == y, "\t", "=== ", x === y);

let arr_a = [1, 2, 3];
let arr_b = [1, 2, 3];

let obj_c = { x: 1, y: 2}
let obj_d = "te" + "xt";

console.log(arr_a, " & ", arr_b, "\t== ", arr_a == arr_b, "\t", "=== ", arr_a === arr_b);
console.log(obj_c, " & ", obj_d, "\t== ", obj_c == obj_d, "\t", "=== ", obj_c === obj_d);
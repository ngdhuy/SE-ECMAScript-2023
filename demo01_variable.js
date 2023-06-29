/**
 * * Variable in ECMAScript (ES) -> dynamic data type
 */

console.clear();

//? problem of ES is dynamic data-type
a = 10; 
console.log("a = ", a, " - ", typeof(a));
a = 'Hello world';
console.log("a = ", a, " - ", typeof(a));

//! dynamic data-type is "Easy to Write (coding) but Difficult to Read (Maintain)"

//? define constant
const MAX = 10; 
console.log(`MAX = ${MAX}`);

try {
  MAX = 100;    // <- Error is here
  console.log(`MAX = ${MAX}`);
} catch (e) {
  console.error('=> Cannot assign/change value of CONSTANT variable');
}

console.info('---------------------------------------');

//? define global variable
var b = 99; 
console.log(`Global variable b = ${b}`);

function show_global_variable() {
  console.log(`\tInside function: Global variable b = ${b}`);
  b = 100;
  console.log(`\tInside function: Global variable  b = ${b}`);
}

show_global_variable();
console.log(`Outside function: Global variable  b = ${b}`);

console.info('---------------------------------------');

//? define local variable
let c = 30; 
console.log(`Local variable c = ${c}`);

const show_local_variable = function () {
  console.log(`\t Inside function: local variable c = ${c}`);
  c = 50;
  console.log(`\t Inside function: local variable c = ${c}`);

  let d = 100;
  console.log(`\t Inside function: local variable d = ${d}`);


}

show_local_variable();
console.log(`Outside function: local variable c = ${c}`);
try {
  console.log(`outside function: local variable d = ${d}`);
} catch (e) {
  console.error(`=> d is not defined in main function`);
}

console.info('---------------------------------------');

//? check problem of variables

const  g = 999;
var    h = 100; 
let    i = 200; 

console.log(`outside function: g = ${g}`);
console.log(`outside function: h = ${h}`);
console.log(`outside function: i = ${i}`);

function change_value() {
  console.log(`\tinside function: g = ${g}`);
  console.log(`\tinside function: h = ${h}`);
  console.log(`\tinside function: i = ${i}`);
  try {
    g = 888;
  } catch (e) {
    console.error(`=> Cannot change value of CONSTANT g`);
  }
  h = 400;
  i = 500;
  console.log(`\tinside function: g = ${g}`);
  console.log(`\tinside function: h = ${h}`);
  console.log(`\tinside function: i = ${i}`);

  const j = 777;
  var   k = 888;
  let   l = 999;
  console.log(`\tinside function: j = ${j}`);
  console.log(`\tinside function: k = ${k}`);
  console.log(`\tinside function: l = ${l}`);
}

change_value();
console.log(`outside function: g = ${g}`);
console.log(`outside function: h = ${h}`);
console.log(`outside function: i = ${i}`);

try {
  console.log(`\tinside function: j = ${j}`);
} catch (e) {
  console.error(`Out of rank (code-block) of j variable because outside function`);
}

try {
  console.log(`\tinside function: k = ${k}`);
} catch(e) {
  console.error(`Out of rank (code-block) of k variable because outside function`);
}

try {
  console.log(`\tinside function: l = ${l}`);
} catch (e) {
  console.error(`Out of rank (code-block) of l variable because outside function`);
}
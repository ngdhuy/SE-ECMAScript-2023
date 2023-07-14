
/**
 * Define object with JSON
 */

'use strict'
console.clear();

//? shorthand assign
let a = 3; 
let obj_a = {a};
console.log(obj_a);

let b = 4; 
let obj_b = { c : b };
console.log(obj_b);

//? define method inside object json
let obj = {
  value: 5,
  double() {
    return this.value * 2;
  }, 
  square : function() { return this.value * this.value; },
  triple: () => obj.value * 3
}

console.log(obj);
console.log(obj.value);
console.log(obj.double());
console.log(obj.square());
console.log(obj.triple());

console.clear();

//? computed with properties of object

let value = 100; 
let func = {
  ['product' + value] : 'Number of Product is ' + value,
  ['method_' + value](x) { return value + x; }
}

console.log(func);
console.log(func.method_100(20));

console.clear();

//? Symbol - is immutable and unique
let s1 = Symbol('Symbol 01');
let s2 = Symbol('Symbol 02');

console.log('s1 == s2 -> ', s1 == s2);
console.log('s1 === s2 -> ', s1 === s2);

let o = {
  [Symbol('id')]  : 5,
  data            : 100
}

console.log(o);
console.log(Object.getOwnPropertyNames(o));

let str = JSON.stringify(o);
console.log("String: ", str);

let json_object = JSON.parse(str);
console.log("Object JSON: ", json_object);
console.log(Object.getOwnPropertyNames(o));
console.log(o.id);

//? Object destructuring
console.clear();

let user = {
  id  : 1, 
  name: 'Mary',
  city: 'Tokyo', 
  role: 'Admin'
};

console.log("Object: ", user);

let { id, name, city, role } = user;
console.log('id = ', id);
console.log('name = ', name);
console.log('city = ', city);
console.log('role = ', role);

//? Lock object
console.clear();

let p_obj = {
  id      : 1, 
  name    : "product", 
  location: {
    long  : 1.25, 
    late  : 2.45
  }, 
  description: 'my note something'
}

console.log("Product is ", p_obj);

//! add new attribute color for object
p_obj.color = 'RED';
console.log("Product after updated is ", p_obj);

//! update value of properties
p_obj.name = 'Petter';
console.log("Product after updated is ", p_obj);

//! remove properties
delete p_obj.description;
console.log("Product after updated is ", p_obj);

//! SEAL is lock object, cannot add or delete properties of object (Lock object structure but can change value)
Object.seal(p_obj);
p_obj.size = [200, 100];            // => this code is not worked because p_obj is seal
console.log('Product after seal is ', p_obj);

p_obj.name = 'Marry';
p_obj.location.long = 999;
console.log('Product after seal is ', p_obj);

//! FREEZE is lock all value and properties of Object
Object.freeze(p_obj);
p_obj.name = 'TOM';
p_obj.location.long = 8888;
console.log('Product after seal is ', p_obj);
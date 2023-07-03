/**
 * * console object in ES
 */

/// Clear all message in console
console.clear();

//? print a variable
let a = 100; 
console.log('a = ', a);

//? print a object
let obj = {
  id    : 1, 
  name  : "iPhone 14 Pro MAX", 
  price : 100000
}

console.log(obj);

//? print array of object
const arrObj = [
  1,
  "Hello world",
  {
    id      : 1,
    name    : "Mr Buoi",
    price   : 100
  },
  [
    1, 2, 3, 4, 5
  ],
  5.85
];

console.log(arrObj);

//? print objects with format table
const objs = [
  {
    id    : 1, 
    name  : 'Product 01', 
    price : 100.5
  },
  {
    id    : 2, 
    name  : 'Product 02', 
    price : 35.6
  },
  {
    id    : 3, 
    name  : 'Product 03', 
    price : 7.8
  },
  {
    id    : 4, 
    name  : 'Product 04', 
    price : 9.2
  },
  {
    id    : 5, 
    name  : 'Product 05', 
    price : 33.95
  },
];

console.log(objs);
console.table(objs);

//? format color for log in terminal
const colors = {
  reset     : "\x1b[0m", 
  bright    : "\x1b[1m",
  dim       : "\x1b[2m",
  underscore: "\x1b[4m",
  blink     : "\x1b[5m", 
  revert    : "\x1b[7m", 
  hidden    : "\x1b[8m", 

  fg: {
    black   : "\x1b[30m",
    red     : "\x1b[31m",
    green   : "\x1b[32m",
    yellow  : "\x1b[33m",
    blue    : "\x1b[34m",
    magenta : "\x1b[35m",
    cyan    : "\x1b[36m",
    white   : "\x1b[37m",
    crimson : "\x1b[38m" // Scarlet
  },

  bg: {
      black : "\x1b[40m",
      red   : "\x1b[41m",
      green : "\x1b[42m",
      yellow: "\x1b[43m",
      blue  : "\x1b[44m",
      magenta: "\x1b[45m",
      cyan  : "\x1b[46m",
      white : "\x1b[47m",
      crimson: "\x1b[48m"
  }
};

console.log(colors.bg.red, colors.fg.yellow, "Hello world", colors.reset);

//? print message with format for information
console.info("This is information of coding");

//? print with String template for variables
let value = 999; 
let s = `I have ${value} dollars`;
console.log(s);
console.log('Value of %s of our dollars', value);

//? print timeline of spent to run code-block or function
console.time('Timer is ...');
for(let i = 0; i < 10; i++) {
  console.count();
  console.log(i);
}
console.timeEnd('Timer is ...');

//? print all properties of object
console.log(obj);
console.dir(objs);

//? print group information of objects
console.group("List"); 
objs.forEach(function(item) {
  console.group("objItem");
  console.dir(item);
  console.groupEnd("objItem");
}); 
 console.groupEnd("List")

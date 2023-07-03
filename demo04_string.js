/**
 * * String in ES6
 */

console.clear(); 

//? define string in ES6 
let a = "hello world";
console.log('a = ', a);

let b = 123; 
console.log(b, typeof(b));

let s_b = b.toString();
console.log(s_b, typeof(s_b));

let c = 'hello\tMr Buoi.\nToday is beautiful day.';
console.log(c);

let d = "I'm a student";
console.log(d);

let e = 'You\'re a beautiful girl.';
console.log(e);

let f = "He is call 'Johnny'. \
He is a worker.";
console.log(f);

let g = "She is Marry." + 
"She is a student in my university";
console.log(g);

//? String template
let value   = 200; 
let height  = 1.65; 
let str     = `I am tall ${height}cm.\nI have ${value} dollar.`;
console.log(str);

let text = String.raw`I am tall ${height}cm.\nI have ${value} dollars`;
console.log(text);

//? String methods
let para = "    The School of Science and Technology (STT). department wants to design automate system";
console.log(para);
para = para.trim();
console.log(para);

//! Upper-case of String
console.log(para.toUpperCase());

//! Lower-case of String
console.log(para.toLowerCase());

//? Get character at index
console.log(para[2]);
console.log(para.charAt(1));
console.log(para.charCodeAt(1));        // -> return ASCII code of character at index

//? Get length of string
console.log(para.length);

//? Joins two string
let str_1 = "The XYZ is a big university in AUS. XYZ 's a beautiful university.";
let str_2 = "XYZ is famous with IT and BUS departments."; 
let str_3 = str_1.concat(" ", str_2);
console.log(str_3);

//? find index of sub-string in string
let key = 'XYZ'; 
console.log("Keyword: ", key, " is ", str_1.indexOf(key));
console.log("Keyword", key, " is second index at ", str_1.indexOf(key, 10));

//? Find index of sub-string without upper-case or lower-case
console.log("Keyword", key, ' is ', str_1.indexOf('xyz'));
console.log("Keyword", key, ' is ', str_1.search(/xyz/i));

//? Extract character from string
console.log(str_1.substring(4, 10));      // -> substring(start_index, end_index)
console.log(str_1.substr(4, 10));         // -> substr(start_index, length_of_substring)

//? Replace string 
console.log(str_1.replace("XYZ", "RMIT"));
console.log(str_1.replaceAll("XYZ", "RMIT"));

//? Split a string to array of string
let arr_str = str_1.split(' ');
console.log(arr_str);

//? Extract the parts of string
let res = str_1.slice(4, 10);
console.log(res);

//? Insert and remove character of string

let arr_char = str_1.split(' ');
console.log(arr_char);

arr_char.splice(1, 0, "My");
console.log(arr_char);

let new_str = arr_char.join(' ');
console.log(new_str);

console.log('----------------------------');
arr_char.splice(1, 3);
console.log(arr_char);
new_str = arr_char.join(' ');
console.log(new_str);
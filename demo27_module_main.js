/**
 * * define main function (look like main.cpp in C Plus Plus)
 */

'use strict'
console.clear()

const {sayHi, response} = require('./demo26_module_sub')

sayHi()
console.log(response('This is data'))

const func = require('./demo25_module_calculate')

let a = 10
let b = 20

console.log(func.sum(a, b))
console.log(func.minus(a, b))
console.log(func.data)
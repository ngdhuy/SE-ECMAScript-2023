/**
 * * define SUB module for BUS process
 */

'use strict'

function sayHello() {
  console.log("Hello world!!!")
}

exports.sayHi = sayHello

exports.response = (message) => `=> Response is ${message}`
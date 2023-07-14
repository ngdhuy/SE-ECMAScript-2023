/**
 * * Call-back hell
 */

'use strict'

console.clear();


//? problem of call-back function is call-back hell
const func_02 = () => {
  console.log("Begin #01");
  setTimeout(() => {
    console.log("Begin #02");
    setTimeout(() => {
      console.log("Begin #03");
      setTimeout(() => {
        console.log("Begin #04");
        setTimeout(() => {
          console.log("Begin #05");
          setTimeout(() => {
            console.log("Begin #06");
            console.log("Run #06");
          }, 50);
          console.log("Run #05");
        }, 100);
        console.log("Run #04");
      }, 300);
      console.log("Run #03");
    }, 500);
    console.log("Run #02");
  }, 1000);
  console.log("Run #01");
}

func_02();
'use strict';

let a = Math.floor(Math.random() * 201 - 100);
let b = Math.floor(Math.random() * 201 - 100);
if (a >= 0 && b >= 0)
    console.log(a - b);
else if (a < 0 && b < 0)
    console.log(a * b);
else
    console.log(a + b);
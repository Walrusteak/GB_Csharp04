'use strict';

let a = 2;
let x = 1 + (a *= 2);
// a = 4, x = 5
// a *= 2 == a = a * 2, при этом само выражение также возвращает его результат
// 1 + (2 * 2) = 5
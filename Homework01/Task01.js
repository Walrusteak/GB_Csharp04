"use strict";

// 1
let celsius = prompt('Введите температуру в градусях Цельсия');
alert('Температура по Фаренгейту: ' + (9 / 5 * celsius + 32))

// 2
let admin, name;
name = 'Василий';
admin = name;
console.log(admin);

// 3
console.log(10 + 10 + '10');  //'2010', т.к. первые два числа складываются как числа, а потом результат приводится к строке, и происходит конкатенация
console.log(10 + '10' + 10);  //'101010', т.к. первое же сложение приводит к переводу в строку и конкатенации, вто втором случае так же складываются строки
console.log(10 + 10 + +'10'); //30, т.к. унарный плюс перед строкой приводит строку к числу, т.е. +"10" = 10, и все три аргумента складываются, как числа
console.log(10 / -'');    //-Infinity, т.к. минус перед строкой также приводит строку к числу, а пустая строка приводится к нулю
console.log(10 / +'2,5'); //NaN, т.к. дробные числа должны быть записаны через точку
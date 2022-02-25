'use strict';

function intToObject(number) {
    if (!Number.isInteger(number) || number < 0 || number > 999) {
        console.log('Введено некорректное значение');
        return {};
    }
    units = number % 10;
    number = Math.floor(number / 10);
    tens = number % 10;
    return {
        units: units,
        tens: tens,
        hundreds: Math.floor(number / 10)
    }     
}
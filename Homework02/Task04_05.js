'use strict';

// 4
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


// 5
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'subtract':
            return subtract(arg1, arg2);
        case 'multiply':
            return multiply(arg1, arg2);
        case 'divide':
            return divide(arg1, arg2);
        default:
            return undefined;
    }
}
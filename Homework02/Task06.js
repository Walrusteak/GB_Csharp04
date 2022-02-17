'use strict';

let amount = prompt('Сколько денег положить?')
amount = +amount;
if (amount == NaN || amount < 1)
    alert('Введено неправильное значение');
else {
    let word;
    let remainder = amount % 100;
    if (remainder >= 5 && remainder <= 20)
        word = 'рублей';
    else {
        remainder = remainder % 10;
        if (remainder == 1)
            word = 'рубль';
        else if (remainder >= 2 && remainder <= 4)
            word = 'рубля';
        else
            word = 'рублей';
    }
    alert('Ваша сумма в ' + amount + ' ' + word + ' успешно зачислена.');
}
'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

let p = new Product('test', 100);
console.log(p.price);
p.make25PercentDiscount();
console.log(p.price);
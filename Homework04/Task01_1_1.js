'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    this.price *= 0.75;
}

let p = new Product('test', 100);
console.log(p.price);
p.make25PercentDiscount();
console.log(p.price);
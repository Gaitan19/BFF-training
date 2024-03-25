"use strict";
class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    displayDetails() {
        console.log(`Marca: ${this.brand}`);
        console.log(`Modelo: ${this.model}`);
        console.log(`Precio: $${this.price}`);
    }
    calculateSalePrice(taxRate) {
        const totalPrice = this.price * (1 + taxRate);
        return totalPrice;
    }
}
const car1 = new Car("Toyota", "Corolla", 25000);
const car2 = new Car("Toyota", "Tercel", 27000);
console.log("Información del coche 1:");
car1.displayDetails();
console.log("Información del coche 2:");
car2.displayDetails();
const taxRate = 0.1;
const salePriceCar1 = car1.calculateSalePrice(taxRate);
const salePriceCar2 = car2.calculateSalePrice(taxRate);
console.log(`Precio de venta del coche 1 con impuestos: $${salePriceCar1}`);
console.log(`Precio de venta del coche 2 con impuestos: $${salePriceCar2}`);

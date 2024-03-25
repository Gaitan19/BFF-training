"use strict";
class Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log("Área del círculo:", circle.calculateArea());
console.log("Perímetro del círculo:", circle.calculatePerimeter());
console.log("Área del rectángulo:", rectangle.calculateArea());
console.log("Perímetro del rectángulo:", rectangle.calculatePerimeter());

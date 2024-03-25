abstract class Shape {
  abstract calculateArea(): number;
  abstract calculatePerimeter(): number;
}

class Circle extends Shape {
  constructor(private readonly radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private readonly width: number, private readonly height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log("Área del círculo:", circle.calculateArea());
console.log("Perímetro del círculo:", circle.calculatePerimeter());

console.log("Área del rectángulo:", rectangle.calculateArea());
console.log("Perímetro del rectángulo:", rectangle.calculatePerimeter());

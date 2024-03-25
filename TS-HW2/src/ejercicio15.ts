// // Singleton________________________________
// class Logger {
//   private static instance: Logger | null;

//   private constructor() {}

//   static getInstance(): Logger {
//     if (!Logger.instance) {
//       Logger.instance = new Logger();
//     }
//     return Logger.instance;
//   }

//   log(message: string): void {
//     console.log(`[LOG] ${message}`);
//   }
// }

// const logger1 = Logger.getInstance();
// const logger2 = Logger.getInstance();

// logger1.log("Mensaje de prueba");

// console.log(logger1 === logger2);

// // factoru method__________________________________

// abstract class Vehicle {
//   abstract drive(): void;
// }

// class Car extends Vehicle {
//   drive(): void {
//     console.log("Conduciendo un coche...");
//   }
// }

// class Bicycle extends Vehicle {
//   drive(): void {
//     console.log("Montando en bicicleta...");
//   }
// }

// class VehicleFactory {
//   createVehicle(type: string): Vehicle {
//     if (type === "car") {
//       return new Car();
//     } else if (type === "bicycle") {
//       return new Bicycle();
//     } else {
//       throw new Error("Tipo de vehículo no válido.");
//     }
//   }
// }

// const factory = new VehicleFactory();

// const car = factory.createVehicle("car");
// car.drive();

// const bicycle = factory.createVehicle("bicycle");
// bicycle.drive();

// observer_________________________

interface Observer {
  update(data: any): void;
}

class Observable {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(data: any): void {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

class ConcreteObserver implements Observer {
  update(data: any): void {
    console.log(`Se ha producido un cambio: ${data}`);
  }
}

const observable = new Observable();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

observable.addObserver(observer1);
observable.addObserver(observer2);

observable.notifyObservers("datos actualizados");
observable.notifyObservers("datos actualizados nuevamente");

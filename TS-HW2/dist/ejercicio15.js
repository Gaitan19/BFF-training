"use strict";
// // Singleton________________________________
// class Logger {
//   private static instance: Logger | null;
class Observable {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }
    notifyObservers(data) {
        this.observers.forEach((observer) => {
            observer.update(data);
        });
    }
}
class ConcreteObserver {
    update(data) {
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

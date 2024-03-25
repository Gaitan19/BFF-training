"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} está comiendo.`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log(`${this.name} está ladrando.`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    purr() {
        console.log(`${this.name} está maullando.`);
    }
}
const myDog = new Dog("Fido");
myDog.eat();
myDog.bark();
const myCat = new Cat("Whiskers");
myCat.eat();
myCat.purr();

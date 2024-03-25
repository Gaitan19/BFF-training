"use strict";
class Dog {
    eat(food) {
        console.log(`El perro está comiendo ${food}.`);
    }
    sleep(hours) {
        console.log(`El perro está durmiendo durante ${hours} horas.`);
    }
}
class Cat {
    eat(food) {
        console.log(`El gato está comiendo ${food}.`);
    }
    sleep(hours) {
        console.log(`El gato está durmiendo durante ${hours} horas.`);
    }
}
const dog = new Dog();
const cat = new Cat();
dog.eat("croquetas");
dog.sleep(8);
cat.eat("pescado");
cat.sleep(10);

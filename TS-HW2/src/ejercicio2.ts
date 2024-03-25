interface Animal {
  eat(food: string): void;
  sleep(hours: number): void;
}

class Dog implements Animal {
  eat(food: string): void {
    console.log(`El perro está comiendo ${food}.`);
  }

  sleep(hours: number): void {
    console.log(`El perro está durmiendo durante ${hours} horas.`);
  }
}

class Cat implements Animal {
  eat(food: string): void {
    console.log(`El gato está comiendo ${food}.`);
  }

  sleep(hours: number): void {
    console.log(`El gato está durmiendo durante ${hours} horas.`);
  }
}

const dog = new Dog();
const cat = new Cat();

dog.eat("croquetas");
dog.sleep(8);

cat.eat("pescado");
cat.sleep(10);

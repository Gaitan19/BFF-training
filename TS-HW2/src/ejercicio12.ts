class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
    console.log(`${this.name} está comiendo.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  bark(): void {
    console.log(`${this.name} está ladrando.`);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  purr(): void {
    console.log(`${this.name} está maullando.`);
  }
}

const myDog = new Dog("Fido");
myDog.eat();
myDog.bark();

const myCat = new Cat("Whiskers");
myCat.eat();
myCat.purr();

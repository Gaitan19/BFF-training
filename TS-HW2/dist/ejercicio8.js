"use strict";
class MyContainer {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    get(index) {
        return this.items[index];
    }
    displayItems() {
        console.log("Elementos del contenedor:");
        this.items.forEach((item) => console.log(item));
    }
}
const numberContainer = new MyContainer();
numberContainer.add(10);
numberContainer.add(20);
numberContainer.add(30);
const stringContainer = new MyContainer();
stringContainer.add("hello");
stringContainer.add("world");
const objectContainer = new MyContainer();
objectContainer.add({ name: "Manolo", age: 30 });
objectContainer.add({ name: "Evanks", age: 20 });
console.log("Contenedor de números:");
numberContainer.displayItems();
console.log("Contenedor de strings:");
stringContainer.displayItems();
console.log("\nContenedor de objetos:");
objectContainer.displayItems();

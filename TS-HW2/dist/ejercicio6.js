"use strict";
class StringDictionary {
    constructor() {
        this.items = {};
    }
    addItem(key, value) {
        this.items[key] = value;
    }
    getItem(key) {
        return this.items[key];
    }
    displayItems() {
        for (const key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                console.log(`Clave: ${key}, Valor: ${this.items[key]}`);
            }
        }
    }
}
const dictionary = new StringDictionary();
dictionary.addItem("fruta", "todo comida fresca");
dictionary.addItem("dinero", "poder");
console.log("El valor de 'dinero' es:", dictionary.getItem("dinero"));
console.log("Todos los elementos del diccionario:");
dictionary.displayItems();

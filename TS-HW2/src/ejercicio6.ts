interface Dictionary {
  [key: string]: string;
}

class StringDictionary {
  private items: Dictionary;

  constructor() {
    this.items = {};
  }

  addItem(key: string, value: string): void {
    this.items[key] = value;
  }

  getItem(key: string): string | undefined {
    return this.items[key];
  }

  displayItems(): void {
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

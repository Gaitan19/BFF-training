interface Container<T> {
  add(item: T): void;
  get(index: number): T | undefined;
  displayItems(): void;
}

class MyContainer<T> implements Container<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T | undefined {
    return this.items[index];
  }

  displayItems(): void {
    console.log("Elementos del contenedor:");
    this.items.forEach((item) => console.log(item));
  }
}

const numberContainer = new MyContainer<number>();
numberContainer.add(10);
numberContainer.add(20);
numberContainer.add(30);

const stringContainer = new MyContainer<string>();
stringContainer.add("hello");
stringContainer.add("world");

const objectContainer = new MyContainer<object>();
objectContainer.add({ name: "Manolo", age: 30 });
objectContainer.add({ name: "Evanks", age: 20 });

console.log("Contenedor de números:");
numberContainer.displayItems();

console.log("Contenedor de strings:");
stringContainer.displayItems();

console.log("\nContenedor de objetos:");
objectContainer.displayItems();

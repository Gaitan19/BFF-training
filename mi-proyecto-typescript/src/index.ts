

// Number examples
let age: number = 30;
let temperature: number = 36.6;
let score: number = 0b1010; // Binary
let bigNumber: bigint = 100n; // BigInt

// String examples
let nameEx: string = "Juan";
let greeting: string = `Hello, ${nameEx}!`;

// Boolean examples
let isStudent: boolean = true;
let isAdult: boolean = age > 18;

// Functions with numbers, strings, and booleans
function describePerson(name: string, age: number, isStudent: boolean) {
  console.log(`Name: ${name}, Age: ${age}, Student: ${isStudent}`);
}

describePerson(nameEx,30,isAdult);

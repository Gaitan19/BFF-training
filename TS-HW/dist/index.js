"use strict";
// Number examples
let age = 30;
let temperature = 36.6;
let score = 0b1010; // Binary
let bigNumber = 100n; // BigInt
// String examples
let nameEx = "Juan";
let greeting = `Hello, ${nameEx}!`;
// Boolean examples
let isStudent = true;
let isAdult = age > 18;
// Functions with numbers, strings, and booleans
function describePerson(name, age, isStudent) {
    console.log(`Name: ${name}, Age: ${age}, Student: ${isStudent}`);
}
describePerson(nameEx, 30, isAdult);

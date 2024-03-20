"use strict";
// 'Any' example
let undefinedValue = "Could be any type";
undefinedValue = 100; // Changing type to number
// 'Void' function example
function printMessage(message) {
    console.log(message);
}
// 'Undefined' example
let undefinedVariable = undefined;
// Function that may return 'void' or 'string'
function getGreeting(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
}
printMessage(getGreeting("ana"));

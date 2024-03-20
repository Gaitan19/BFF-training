"use strict";
// Array example
let numberList = [1, 2, 3, 4, 5];
let nameList = ["Ana", "Luis", "Miguel"];
// Tuple example
let user = ["Ana", 25, true];
// Functions with arrays and tuples
function addUser(user, users) {
    users.push(user);
    return users;
}
const userFinal = addUser(user, []);
console.log('userFinal :>> ', userFinal);

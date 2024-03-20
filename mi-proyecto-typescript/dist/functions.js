"use strict";
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const email = "example@email.com";
const isValid = isValidEmail(email);
console.log(isValid); // Output: true

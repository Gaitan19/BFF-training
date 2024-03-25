"use strict";
const displayUserMessage = (user) => {
    if (user.email) {
        console.log(`¡Hola ${user.name} ${user.surname}! Tu correo electrónico es ${user.email}.`);
    }
    else {
        console.log(`¡Hola ${user.name} ${user.surname}! No proporcionaste un correo electrónico.`);
    }
};
const userEmail = {
    name: "Kenley",
    surname: "Josue",
    email: "user@mail.com",
};
const user = { name: "Manolo", surname: "Lolo" };
displayUserMessage(userEmail);
displayUserMessage(user);

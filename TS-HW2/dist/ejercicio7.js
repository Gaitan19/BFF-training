"use strict";
const displayAdminUserInfo = (user) => {
    console.log(`Nombre: ${user.name}`);
    console.log(`Correo electrónico: ${user.email}`);
    console.log(`Permisos: ${user.permissions.join(", ")}`);
    console.log(`Rol: ${user.role}`);
};
const regularUser = {
    name: "Juan",
    email: "juan@mail.com",
    permissions: [],
    role: "Usuario",
};
const adminUser = {
    name: "Admin",
    email: "admin@mail.com",
    permissions: ["crear", "editar", "eliminar"],
    role: "Administrador",
};
console.log("Información de usuario regular:");
displayAdminUserInfo(regularUser);
console.log("\nInformación de administrador:");
displayAdminUserInfo(adminUser);

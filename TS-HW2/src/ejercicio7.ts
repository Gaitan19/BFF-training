interface AdminUser {
  name: string;
  email: string;
  permissions: string[];
  role: string;
}

const displayAdminUserInfo = (user: AdminUser): void => {
  console.log(`Nombre: ${user.name}`);
  console.log(`Correo electrónico: ${user.email}`);
  console.log(`Permisos: ${user.permissions.join(", ")}`);
  console.log(`Rol: ${user.role}`);
};

const regularUser: AdminUser = {
  name: "Juan",
  email: "juan@mail.com",
  permissions: [],
  role: "Usuario",
};

const adminUser: AdminUser = {
  name: "Admin",
  email: "admin@mail.com",
  permissions: ["crear", "editar", "eliminar"],
  role: "Administrador",
};

console.log("Información de usuario regular:");
displayAdminUserInfo(regularUser);

console.log("\nInformación de administrador:");
displayAdminUserInfo(adminUser);

interface User {
  name: string;
  surname: string;
  email?: string;
}

const displayUserMessage = (user: User): void => {
  if (user.email) {
    console.log(
      `¡Hola ${user.name} ${user.surname}! Tu correo electrónico es ${user.email}.`
    );
  } else {
    console.log(
      `¡Hola ${user.name} ${user.surname}! No proporcionaste un correo electrónico.`
    );
  }
};

const userEmail: User = {
  name: "Kenley",
  surname: "Josue",
  email: "user@mail.com",
};
const user: User = { name: "Manolo", surname: "Lolo" };

displayUserMessage(userEmail);
displayUserMessage(user);

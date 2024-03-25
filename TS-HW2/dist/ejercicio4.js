"use strict";
function displayBook(book) {
    console.log(`Título: ${book.title}, Autor: ${book.author}`);
}
const myBook = {
    title: "Nano machine",
    author: "unknown",
};
// myBook.title = "lolo";
displayBook(myBook);

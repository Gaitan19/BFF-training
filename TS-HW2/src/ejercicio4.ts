interface Book {
  readonly title: string;
  readonly author: string;
}

function displayBook(book: Book): void {
  console.log(`Título: ${book.title}, Autor: ${book.author}`);
}

const myBook: Book = {
  title: "Nano machine",
  author: "unknown",
};

// myBook.title = "lolo";

displayBook(myBook);

const { faker } = require("@faker-js/faker");

class BooksService {
  constructor() {
    this.books = [];
    this.generate();
  }
  generate() {
    for (let i = 0; i < 10; i++) {
      this.books.push({
        id: i + 1,
        title: faker.commerce.productName(),
        author: faker.name.fullName(),
        translator: faker.name.fullName(),
        genre: faker.commerce.department(),
        volume: faker.random.numeric(),
        numberOfPages: Math.floor(Math.random() * 300) + 100,
        price: faker.commerce.price(),
        bestSeller: Math.random() < 0.5,
        publishedDate: faker.date.birthdate(),
        editorial: faker.company.name(),
      });
    }
  }

  findAllBooks() {
    return {
      message: "This list contains all the books",
      data: this.books,
    };
  }

  findBookById(id) {
    return {
      message: "You searched a book by id",
      data: this.books.find((book) => book.id === parseInt(id)),
    };
  }

  findBookByTitle(bookTitle) {
    const bookByTitleInformation = this.books.find(
      (book) => book.title === bookTitle
    );
    if (bookByTitleInformation) {
      return {
        message: "You searched a book by title",
        data: bookByTitleInformation,
      };
    } else {
      return {
        message: `The book: '${bookTitle}' does not exist!`,
      };
    }
  }

  findBestSellers() {
    const bestSellerBooks = this.books.filter(
      (book) => book.bestSeller === true
    );
    return {
      message: "You searched the Best Seller Books",
      data: bestSellerBooks,
    };
  }

  createBook(data) {
    this.books.push(data);
    const bookIndex = this.books.length - 1;
    return {
      message: "Book Created",
      data: this.books[bookIndex],
    };
  }

  updateBook(id, changes) {
    const index = this.books.findIndex((book) => book.id === parseInt(id));
    this.books.fill(changes, index, index + 1);
    return {
      message: "Book Updated",
      data: this.books[index],
    };
  }

  deleteBook(id) {
    const index = this.books.findIndex((book) => book.id === parseInt(id));
    return {
      message: "Book Deleted",
      data: this.books.splice(index, 1),
    };
  }
}

module.exports = BooksService;

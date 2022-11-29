const express = require("express");
const BooksService = require("../services/books.service");

const route = express.Router();
const service = new BooksService();

// localhost:3004/api/v1/books
route.get("/", (req, res) => {
  const books = service.findAllBooks();
  res.json(books);
});

// localhost:3004/api/v1/books/filter
route.get("/filter", (req, res) => {
  res.send("I am a filter route of books");
});

// localhost:3004/api/v1/books/filter/bestSellers
route.get("/filter/bestSellers", (req, res) => {
  const foundBestSellerBooks = service.findBestSellers();
  res.json(foundBestSellerBooks);
});

//localhost:3004/api/v1/books/:id
route.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundBookById = service.findBookById(id);
  res.json(foundBookById);
});

//localhost:3004/api/v1/books/filter/:title
route.get("/filter/:title", (req, res) => {
  const { title } = req.params;
  const foundBookByTitle = service.findBookByTitle(title);
  res.json(foundBookByTitle);
});

//localhost:3004/api/v1/books
route.post("/", (req, res) => {
  const data = req.body;
  const newBook = service.createBook(data);
  res.status(201).json(newBook);
});

//localhost:3004/api/v1/books/:id
route.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  const updateBook = service.updateBook(id, changes);
  res.status(201).json(updateBook);
});

//localhost:3004/api/v1/books/:id
route.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteBook = service.deleteBook(id);
  res.status(202).json(deleteBook);
});

module.exports = route;

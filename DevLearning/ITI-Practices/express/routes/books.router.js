const express = require("express");
const BooksService = require("../services/books.service");

const route = express.Router();
const service = new BooksService();

route.get("/", (req, res) => {
  // const { size } = req.query;
  const books = service.findAll();

  res.json(books);
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  const retFind = service.findSingle(id);
  res.json(retFind);
});

route.post("/", (req, res) => {
  const data = req.body;
  const newBook = service.create(data);
  res.status(201).json(newBook);
});

route.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  const updateBook = service.update(id, changes);
  res.status(201).json(updateBook);
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteBook = service.delete(id);
  res.status(202).json(deleteBook);
});

module.exports = route;

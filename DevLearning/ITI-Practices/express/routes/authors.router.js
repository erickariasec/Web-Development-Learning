const express = require("express");
const AuthorsService = require("../services/authors.service");

const route = express.Router();
const service = new AuthorsService();

// localhost:3004/api/v1/authors
route.get("/", (req, res) => {
  const authors = service.findAllAuthors();
  res.json(authors);
});

// ! First goes specific routes, then dynamic routes.

// localhost:3004/api/v1/authors/filter
route.get("/filter", (req, res) => {
  res.send("I am a filter route for authors");
});

//localhost:3004/api/v1/authors/filter/:lastName
route.get("/filter/:lastName", (req, res) => {
  const { lastName } = req.params;
  const foundAuthorByLastName = service.findAuthorByLastName(lastName);
  res.json(foundAuthorByLastName);
});

// localhost:3004/api/v1/authors/:id
route.get("/:id", (req, res) => {
  const { id } = req.params;
  const retFind = service.findAuthorById(id);
  res.json(retFind);
});

// localhost:3004/api/v1/authors/
route.post("/", (req, res) => {
  const data = req.body;
  const newAuthor = service.createAuthor(data);
  res.status(201).json(newAuthor);
});

// localhost:3004/api/v1/authors/:id
route.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  const updateAuthor = service.updateAuthor(id, changes);
  res.status(201).json(updateAuthor);
});

// localhost:3004/api/v1/authors/:id
route.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteAuthor = service.deleteAuthor(id);
  res.status(202).json(deleteAuthor);
});

module.exports = route;

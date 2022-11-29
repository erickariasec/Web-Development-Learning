const express = require("express");
const UsersService = require("../services/users.service");

const route = express.Router();
const service = new UsersService();

// localhost:3004/api/v1/users
route.get("/", (req, res) => {
  const users = service.findAllUsers();

  res.json(users);
});

// localhost:3004/api/v1/users/:id
route.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUserById = service.findUserById(id);
  res.json(foundUserById);
});

// localhost:3004/api/v1/users/filter
route.get("/filter", (req, res) => {
  res.send("I am a filter route of users");
});

// localhost:3004/api/v1/users/filter/:genre
route.get("/filter/:genre", (req, res) => {
  const { genre } = req.params;
  const foundUserByGenre = service.findUsersByGenre(genre);
  res.json(foundUserByGenre);
});

// localhost:3004/api/v1/users
route.post("/", (req, res) => {
  const data = req.body;
  const newUser = service.createUser(data);
  res.status(201).json(newUser);
});

// localhost:3004/api/v1/users/:id
route.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  const updateUser = service.updateUser(id, changes);
  res.status(201).json(updateUser);
});

// localhost:3004/api/v1/users/:id
route.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteUser = service.deleteUser(id);
  res.status(202).json(deleteUser);
});

module.exports = route;

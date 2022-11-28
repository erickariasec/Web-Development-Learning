const express = require("express");
const UsersService = require("../services/users.service");

const route = express.Router();
const service = new UsersService();

route.get("/", (req, res) => {
  const users = service.findAll();

  res.json(users);
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  const retFind = service.findSingle(id);
  res.json(retFind);
});

route.post("/", (req, res) => {
  const data = req.body;
  const newUser = service.create(data);
  res.status(201).json(newUser);
});

route.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  const updateUser = service.update(id, changes);
  res.status(201).json(updateUser);
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteUser = service.delete(id);
  res.status(202).json(deleteUser);
});

module.exports = route;

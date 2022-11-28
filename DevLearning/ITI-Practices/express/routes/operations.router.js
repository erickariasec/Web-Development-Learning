const express = require("express");
const OperationsService = require("../services/operations.service");

const route = express.Router();
const service = new OperationsService();

route.get("/", (req, res) => {
  const operations = service.findAll();
  res.json(operations);
});

route.get("/:id", (req, res) => {
  const { id } = req.params;
  const retFind = service.findSingle(id);
  res.json(retFind);
});

route.post("/", (req, res) => {
  const data = req.body;
  const newOperation = service.create(data);
  res.status(201).json(newOperation);
});

route.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  const updateOperation = service.update(id, changes);
  res.status(201).json(updateOperation);
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteOperation = service.delete(id);
  res.status(202).json(deleteOperation);
});

module.exports = route;

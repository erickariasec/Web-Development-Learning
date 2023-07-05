const express = require("express");

const route = express.Router();

// Routing of Products
// Find all products
route.get("/", (req, res) => {
  res.json({
    name: "Product",
  });
});

// Find one product ?id=gdf&&name=vdv
route.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    name: "Product" + id,
  });
});

route.post("/", (req, res) => {
  const body = req.body;
  res.json({
    name: "Product",
  });
});

route.patch("/:id", (req, res) => {
  const { id } = req.params; 
  const body = req.body; // lo que voy a cambiar 
  res.json({
    name: "Product",
  });
});

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    name: "Product",
  });
});

module.exports = route;

const express = require("express");

const route = express.Router();

const validation = (req, res, next) => {
  const users = {
    name: "Erick",
    pass: "secretkey"
  }

  if (users.name === "Erick" && users.pass === "secretkey") {
    next();
    return;
  } else {
    res.json("Existió un error");
  }
}

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

route.post("/", validation, (req, res, next) => {
  const body = req.body;
  res.json({
    description: "Everything is Ok!",
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

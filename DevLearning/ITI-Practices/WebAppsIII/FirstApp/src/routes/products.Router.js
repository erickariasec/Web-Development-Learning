const express = require("express");
const Product = require("../services/products.service");
const {
  createdSchemaProduct,
  updatedSchemaProduct,
  getSchemaProduct,
} = require("../schema/products.schema");
const validator = require("../middlewares/validatorSchemaHandler");
const route = express.Router();

const service = new Product();

const validation = (req, res, next) => {
  const users = {
    name: "Erick",
    pass: "secretkey",
  };

  if (users.name === "Erick" && users.pass === "secretkey") {
    next();
    return;
  } else {
    res.json("Existió un error");
  }
};

// Routing of Products
// Find all products
route.get("/", (req, res, next) => {
  try {
    const products = service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// Find one product ?id=gdf&&name=vdv
route.get("/:id", validator(getSchemaProduct, "params"), (req, res) => {
  const { id } = req.params;
  res.json({
    name: "Product" + id,
  });
});

route.post("/", (req, res) => {
  const body = req.body;
  res.json({
    description: "Everything is Ok!",
  });
});

route.patch(
  "/:id",
  validator(getSchemaProduct, "params"),
  validator(updatedSchemaProduct, "body"),
  (req, res) => {
    const { id } = req.params;
    const body = req.body; // lo que voy a cambiar
    res.json({
      name: "Product",
    });
  }
);

route.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    name: "Product",
  });
});

module.exports = route;

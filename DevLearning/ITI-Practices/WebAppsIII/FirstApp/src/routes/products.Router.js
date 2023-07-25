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

// Routing of Products
// Find all products
route.get("/", async (req, res, next) => {
  try {
    const products = await service.find();
    res.json({
      message: "User",
      products,
    });
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

route.post("/", validator(createdSchemaProduct, "body"), (req, res) => {
  try {
    const body = req.body;
    res.json({
      description: "Everything is Ok!",
    });
  } catch (error) {
    next(error);
  }
});

route.patch(
  "/:id",
  validator(getSchemaProduct, "params"), // 1st Middleware
  validator(updatedSchemaProduct, "body"), // 2nd Middleware
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

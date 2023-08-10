const express = require("express");
const Nivel = require("../services/nivel.service");
const {
  createdSchemaProduct,
  updatedSchemaProduct,
  getSchemaProduct,
} = require("../schema/products.schema");
const validator = require("../middlewares/validatorSchemaHandler");
const route = express.Router();

const service = new Nivel();

// Routing of Niveles
// Find all niveles
route.get("/", async (req, res, next) => {
  try {
    const nivel = await service.find();
    res.json({
      message: "User",
      nivel,
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

route.post("/", async (req, res) => {
  try {
    const body = req.body;
    const newNivel = service.create(body);
    res.status(201).json({
      message: "Nivel created",
      newNivel,
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

const express = require("express");
const productsRouter = require("./products.router");
const nivelRouter = require("./nivel.router");

const routesAPI = (app) => {
  const route = express.Router();

  app.use("/api/v1", route);
  route.use("/products", productsRouter); // Middleware
  route.use("/nivel", nivelRouter); // Middleware
};

module.exports = routesAPI;

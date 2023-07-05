const express = require('express');
const productsRouter = require('./products.Router');

const routesAPI = (app) => {
  const route = express.Router();
  const route1 = express.Router();
  
  app.use("/api/v1", route);
  route.use("/products", productsRouter); // Middleware
  route.use("/students", productsRouter); // Middleware
  route.use("/employess", productsRouter); // Middleware

  app.use("/api/v2", route1);
  route.use("/products", productsRouter); // Middleware
  route.use("/students", productsRouter); // Middleware
  route.use("/employees", productsRouter); // Middleware
}

module.exports = routesAPI;
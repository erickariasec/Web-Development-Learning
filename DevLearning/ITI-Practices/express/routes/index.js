const booksRouter = require("./books.router");
const authorsRouter = require("./authors.router");
const usersRouter = require("./users.router");
const operationsRouter = require("./operations.router");

const express = require("express");

const routerAPI = (app) => {
  const route = express.Router();
  app.use("/api/v1", route);

  route.use("/books", booksRouter);
  route.use("/authors", authorsRouter);
  route.use("/users", usersRouter);
  route.use("/operations", operationsRouter);
};

module.exports = routerAPI;

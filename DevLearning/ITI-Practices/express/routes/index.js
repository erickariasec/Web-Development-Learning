const booksRouter = require('./books.router');
const authorsRouter = require('./authors.router');
const usersRouter = require("./users.router");
const operationsRouter = require("./operations.router");

const routerAPI = (app) => {
    app.use('/books', booksRouter);
    app.use("/authors", authorsRouter);
    app.use("/users", usersRouter);
    app.use("/operations", operationsRouter);
}

module.exports = routerAPI;
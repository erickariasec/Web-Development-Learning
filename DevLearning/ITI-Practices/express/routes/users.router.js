const express = require("express");
const { faker } = require("@faker-js/faker");

const route = express.Router();

route.get("/", (req, res) => {
    const {size} = req.query
    const limit = size || 10
    const users = [];
    for (let i = 0; i < limit; i++) {
        users.push({
            userId: faker.datatype.uuid(),
            name: faker.name.firstName(),
            lastName: faker.name.lastName(),
        });
    }
    res.json(users);

});

route.get("/:userId/books/:bookId", (req, res) => {
    const { userId, bookId } = req.params
    res.json({
        userId: userId,
        bookId: bookId,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
    });
});

module.exports = route;
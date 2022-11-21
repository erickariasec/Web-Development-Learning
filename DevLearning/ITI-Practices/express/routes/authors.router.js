const express = require("express");
const { faker } = require("@faker-js/faker");

const route = express.Router();

route.get('/', (req, res) => {
    const {size} = req.query
    const limit = size || 10
    const authors = [];
    for (let i = 0; i < limit; i++) {
        authors.push({
            authorId: faker.datatype.uuid(),
            name: faker.name.firstName(),
            lastName: faker.name.lastName(),
        })
    }
    res.json(authors);
})

// ! First goes specific routes, then dynamic routes.

route.get("/filter", (req, res) => {
    res.send("I am a filter route");
});

route.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        authorId: id,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
    });
});

module.exports = route;

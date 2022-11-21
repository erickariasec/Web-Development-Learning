const express = require("express");
const { faker } = require("@faker-js/faker");

const route = express.Router();

// http://localhost:3004/operations?limit=10&offset=20

route.get("/", (req, res) => {
    const { limit, offset } = req.query
    res.json({
        limit: limit,
        offset: offset,
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
    });
});

module.exports = route;

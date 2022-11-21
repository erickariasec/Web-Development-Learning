const express = require('express');
const { faker } = require("@faker-js/faker");

const route = express.Router();

route.get('/', (req, res) => {
    const {size} = req.query
    const limit = size || 10
    const books = [];
    for (let i = 0; i < limit; i++) {
        books.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price()
        })
    }
    res.json(books);
})

module.exports = route;
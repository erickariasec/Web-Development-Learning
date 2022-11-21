// OLD WAY HTTP

// const http = require('http');

// http.createServer((req, res) => {
//     console.log("new request");
//     console.log(req.url);

//     switch (req.url) {
//         case "/hello":
//             res.write("Hello World");
//             break;
//         case "/authors":
//             res.write("Here are the authors of the project")
//             break;
//         default:
//             res.write("my first server with http");
//     }

//     res.end();
// }).listen(3004)

// console.log("Listening port from port 3004");



// NEW WAY EXPRESS

const express = require('express');
// const routerAPI = require('./routes/index');
const routerAPI = require("./routes");

const app = express();
const port = 3004;

app.get('/', (req, res) => {
    res.send("My first server with Express");
});

routerAPI(app);

// app.get('/authors', (req, res) => {
//     res.json({
//         authorId: 1,
//         name: "Erick",
//         lastName: "Arias"
//     });
// })


// ! First goes specific routes, then dynamic routes.

// app.get("/authors/filter", (req, res) => {
//     res.send("I am a filter route");
// });

// app.get("/authors/:id", (req, res) => {
//     const { id } = req.params
//     res.json({
//         authorId: id,
//         name: "Erick",
//         lastName: "Arias",
//     });
// });

// app.get("/users", (req, res) => {
//     res.json({
//         userId: 1,
//         name: "Erick",
//         lastName: "Arias",
//     });
// });

// app.get("/users/:userId/books/:bookId", (req, res) => {
//     const { userId, bookId } = req.params
//     res.json({
//         userId: userId,
//         bookId: bookId,
//         name: "Erick",
//         lastName: "Arias",
//     });
// });

// http://localhost:3004/operations?limit=10&offset=20
// app.get("/operations", (req, res) => {
//     const { limit, offset } = req.query
//     res.json({
//         limit: limit,
//         offset: offset,
//         name: "Erick",
//         lastName: "Arias",
//     });
// });

app.listen(port, () => {
    console.log(`Listening from port ${port}`);
});
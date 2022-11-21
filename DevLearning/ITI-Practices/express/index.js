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

app.listen(port, () => {
    console.log(`Listening from port ${port}`);
});
const express = require("express");
const routeAPI = require("./src/routes");
const Date = require("./src/services/serviceProducts");
const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   const { name } = req.query;
//   res.json({
//     status: "Ok",
//     message: "Success!",
//     name: name,
//   });
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.json({
    status: "Ok",
    message: "Success!",
  });
});

// let date1 = new Date(2023, 6, 2);
// let date2 = new Date(2024, 7, 3);
// let date3 = new Date(2021, 5, 16);
let date4 = new Date(2024, 2, 28);
// console.log(date1.toString());
// console.log(date2.toString());
// console.log(date3.toString());
console.log(date4.toString());

routeAPI(app);

// Parameters

// Firts normal routes
// app.get("/filter", (req, res) => {
//   const name = req.params.name;
//   res.json({
//     status: "Ok",
//     message: "Success!",
//     name: name,
//   });
// });

// Then routes with parameters
// app.get("/:name", (req, res) => {
//   const name = req.params.name;
//   res.json({
//     status: "Ok",
//     message: "Success!",
//     name: name
//   });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

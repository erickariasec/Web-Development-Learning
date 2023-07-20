const express = require("express");
const routeAPI = require("./src/routes");
const { logError, errorHandler } = require("./src/middlewares/logErrorHandler");
const app = express();
const port = process.env.PORT || 3005;

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

routeAPI(app);
app.use(logError);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

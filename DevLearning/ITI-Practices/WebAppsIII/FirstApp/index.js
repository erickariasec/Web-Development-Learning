const express = require("express");
const routeAPI = require("./src/routes");
const { config } = require("./src/config/config");
const {
  logError,
  errorHandler,
  boomErrorHandler,
} = require("./src/middlewares/logErrorHandler");
const app = express();
const port = config.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
  res.json({
    status: "Ok",
    message: "Success!",
  });
});

routeAPI(app);
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

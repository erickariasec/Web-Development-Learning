const logError = (err, req, res, next) => {
  console.log("first middleware log error");
  console.log(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  console.log("second middleware error Handler");
  res.json({
    message: err.message,
    stack: err.stack,
  });
};

const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { logError, errorHandler, boomErrorHandler };

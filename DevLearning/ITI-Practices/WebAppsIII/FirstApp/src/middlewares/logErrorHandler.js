const logError = (err, req, res, next) => {
  console.log(first);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  console.log(second);
  res.json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = { logError, errorHandler };

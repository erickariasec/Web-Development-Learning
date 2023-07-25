const Boom = require("boom");

// Closure
const validator = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { err } = schema.validate(data);
    if (err) {
      next(Boom.badRequest("The schema is not valid"));
    } else {
      next();
    }
  };
};

module.exports = validator;
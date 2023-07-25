const Joi = require("joi");

const id = Joi.number().integer().positive();
const name = Joi.string().min(1).max(50);

const createdSchemaProduct = Joi.object({
  name: name.required(),
});

const updatedSchemaProduct = Joi.object({
  name: name,
});

const getSchemaProduct = Joi.object({
  id: id.required(),
});

getSchemaProduct.validate({ id: 23 });

module.exports = {
  createdSchemaProduct,
  updatedSchemaProduct,
  getSchemaProduct,
};

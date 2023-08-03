const {schemaNivel, Nivel} = require("./nivel.model");

const setupInitial = (sequelize) => {
  Nivel.init(schemaNivel, Nivel.config(sequelize));
  // los demás modelos
}

module.exports = setupInitial;
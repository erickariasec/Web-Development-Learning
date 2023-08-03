const { config } = require("../config/config");
const { Sequelize } = require("sequelize");
const setupInitial = require("../db/models");

const USER = encodeURIComponent(config.DBUSER);
const PASSWORD = encodeURIComponent(config.DBPASSWORD);

const URI = `postgres://${USER}:${PASSWORD}@${config.DBHOST}:${config.DBPORT}/${config.DBNAME}`;

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: (...msg) => console.log(msg),
  // logging: false,
});

setupInitial(sequelize);
sequelize.sync();

module.exports = sequelize;

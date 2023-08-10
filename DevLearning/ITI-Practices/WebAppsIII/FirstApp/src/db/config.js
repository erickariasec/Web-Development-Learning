const { config } = require("../config/config");
const { Sequelize } = require("sequelize");
const setupInitial = require("../db/models");

const USER = encodeURIComponent(config.DBUSER);
const PASSWORD = encodeURIComponent(config.DBPASSWORD);

const URI = `postgres://${USER}:${PASSWORD}@${config.DBHOST}:${config.DBPORT}/${config.DBNAME}`;

module.exports = {
  development: {
    url: URI,
    dialect: "mysql",
  },
  production: {
    url: URI,
    dialect: "postgres",
  }
}
require("dotenv").config();

const config = {
  env: process.env.NODE || "dev",
  db_user: process.env.DBUSER,
  // implementar las demás variables
};

module.exports = { config };

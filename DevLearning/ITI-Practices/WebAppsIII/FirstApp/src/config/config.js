require("dotenv").config();

const config = {
  env: process.env.NODE || "dev",
  PORT: process.env.PORT || 3005,
  DBUSER: process.env.DBUSER,
  DBPASSWORD: process.env.DBPASSWORD,
  DBHOST: process.env.DBHOST,
  DBPORT: process.env.DBPORT,
  DBNAME: process.env.DBNAME,
};

module.exports = { config };

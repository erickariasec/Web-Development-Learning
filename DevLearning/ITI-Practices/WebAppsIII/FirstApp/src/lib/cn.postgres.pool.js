const { config } = require("../config/config");
const { Pool } = require("pg");

const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);

const URI = `postgres://${USER}:${PASSWORD}@${config.db_host}:${config.db_port}/${config.db_name}`;

const pool = new Pool({
  connectionString: URI,
});

// host: lallah.db.elephantsql.com,
// user: "lckvhfdk",
// password: "XUSZAiizrUBvqyeh9cL1_2nDAakgjR4G",
// database: "lckvhfdk",

module.exports = pool;

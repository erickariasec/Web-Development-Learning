const { Client } = require("pg");

const getConnection = async () => {
  const client = new Client({
    host: lallah.db.elephantsql.com,
    user: "lckvhfdk",
    password: "XUSZAiizrUBvqyeh9cL1_2nDAakgjR4G",
    database: "lckvhfdk",
  });

  await client.connect();
  return client;
};

module.exports = { getConnection };

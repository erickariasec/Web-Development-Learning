const Boom = require("boom");
const { getConnection } = require("../lib/cn.postgres");
class Product {
  constructor() {}

  async find() {
    const client = await getConnection();
    const query = "SELECT * FROM student";
    const rta = await client.query(query);

    return rta.rows;
  }

  // async find() {
  //   const client = await getConnection();
  //   const query = 'SELECT * FROM students';
  //   const rta = await client.query(query);
  //   return rta.rows;
  // }
}

module.exports = Product;

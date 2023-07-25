const Boom = require("boom");
const { getConnection } = require("../lib/cn.postgres");
class Product {
  constructor() {}

  find() {
    const id = 1;
    if (id === 1) {
      throw Boom.badRequest("404 Not Found");
    }

    return id;
  }

  // async find() {
  //   const client = await getConnection();
  //   const query = 'SELECT * FROM students';
  //   const rta = await client.query(query);
  //   return rta.rows;
  // }
}

module.exports = Product;

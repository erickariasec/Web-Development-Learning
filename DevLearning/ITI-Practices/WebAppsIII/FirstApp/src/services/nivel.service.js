const pool = require("../lib/cn.postgres.pool");

class Nivel {
  constructor() {
    this.pool = pool;
    this.pool.on("error", (err) => console.log(err));
  }

  async find() {
    const query = "SELECT * FROM nivel";
    const rta = await this.pool.query(query);
    return rta.rows;
  }
}

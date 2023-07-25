const pool = require("../lib/cn.postgres.pool");

class Nivel {
  constructor() {
    this.pool = pool;
    this.pool.on("error", (err) => console.log(err));
  }
}

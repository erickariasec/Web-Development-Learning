const { models } = require("../lib/cn.sequelize");

class Nivel {
  constructor() {}

  async find() {
    const rta = await models.Nivel.findAll();
    return rta;
  }

  async findOne(id) {
    const rta = await models.Nivel.findByPk(id);
    return rta;
  }

  async create(data) {
    const rta = await models.Nivel.create(data);
    if (!rta) {
      throw new Error(`This ${data} is not valid}`);
    }
    return rta;
  }

  async update(id, data) {
    const nivelIdSearch = await this.findOne(id);
    const rta = await nivelIdSearch.update(data);
    return rta;
  }

  async delete(id) {
    const nivelIdSearch = await this.findOne(id);
    const rta = await nivelIdSearch.destroy();
    return rta;
  }
}

module.exports = Nivel;

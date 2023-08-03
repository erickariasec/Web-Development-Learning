const { Model, DataTypes, Sequelize } = require("sequelize");

// const sequelize = new Sequelize();
// sequelize.define('Nivel', schemaNivel);

// Definir el nombre de la tabla
const NIVEL_TABLE = "nivel";

const schemaNivel = {
  nivel_id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nivel_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Nivel extends Model {
  static associate() {} // Definir las relaciones uno a uno, uno a muchos, muchos a muchos
  static config(sequelize) {
    return {
      sequelize,
      tableName: NIVEL_TABLE,
      modelName: "Nivel",
      timestamps: false,
    };
  }
}

module.exports = { NIVEL_TABLE, schemaNivel, Nivel };

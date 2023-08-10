'use strict';

const {NIVEL_TABLE, schemaNivel} = require('../models/nivel.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(NIVEL_TABLE, schemaNivel);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface) {
    
    await queryInterface.dropTable(NIVEL_TABLE);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

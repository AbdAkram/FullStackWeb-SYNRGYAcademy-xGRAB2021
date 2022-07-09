'use strict';
const kategori = require("../models/data/kategoris.json");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const updateDate = kategori.kategori.map((data) => {
      return {
        id: data.id,
        namaKategori: data.namaKategori,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    await queryInterface.bulkInsert("kategoris", updateDate, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

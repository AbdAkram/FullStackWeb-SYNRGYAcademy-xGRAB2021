"use strict";
const dataBerita = require("../models/data/berita.json");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const updateDate = dataBerita.berita.map((berita) => {
      return {
        idKategori: berita.idKategori,
        judulBerita: berita.judulBerita,
        sumberBerita: berita.sumberBerita,
        jumlahLike: berita.jumlahLike,
        isMovieNews: berita.isMovieNews,
        isSerialNews: berita.isSerialNews,
        jumlahLihat: berita.jumlahLihat,
        isiBerita: berita.isiBerita,
        sinopsis: berita.sinopsis,
        bannerBerita: berita.bannerBerita,
        soundtrack: berita.soundtrack,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    await queryInterface.bulkInsert("Berita", updateDate, {});
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
  },
};

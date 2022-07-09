"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Berita", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idKategori: {
        type: Sequelize.INTEGER,
      },
      judulBerita: {
        type: Sequelize.STRING,
      },
      sumberBerita: {
        type: Sequelize.STRING,
      },
      jumlahLike: {
        type: Sequelize.INTEGER,
      },
      isMovieNews: {
        type: Sequelize.BOOLEAN,
      },
      isSerialNews: {
        type: Sequelize.BOOLEAN,
      },
      jumlahLihat: {
        type: Sequelize.INTEGER,
      },
      isiBerita: {
        type: Sequelize.STRING(2000),
      },
      sinopsis: {
        type: Sequelize.STRING,
      },
      bannerBerita: {
        type: Sequelize.STRING,
      },
      soundtrack: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Berita");
  },
};

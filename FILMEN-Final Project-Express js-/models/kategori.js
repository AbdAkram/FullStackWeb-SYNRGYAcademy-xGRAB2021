'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kategori.hasMany(models.Berita, {
        foreignKey: "idKategori",
      });
    }
  };
  kategori.init({
    namaKategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kategori',
  });
  return kategori;
};
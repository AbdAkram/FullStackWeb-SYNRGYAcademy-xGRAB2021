"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Berita extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Berita.belongsTo(models.kategori,{
        foreignKey:"idKategori",
      });
      Berita.hasMany(models.comment,{
        foreignKey:"idBerita",
      });
    }
  }
  Berita.init(
    {
      idKategori: DataTypes.INTEGER,
      judulBerita: DataTypes.STRING,
      sumberBerita: DataTypes.STRING,
      jumlahLike: DataTypes.INTEGER,
      isMovieNews: DataTypes.BOOLEAN,
      isSerialNews: DataTypes.BOOLEAN,
      jumlahLihat: DataTypes.INTEGER,
      isiBerita: DataTypes.STRING(2000),
      sinopsis: DataTypes.STRING,
      bannerBerita: DataTypes.STRING,
      soundtrack: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Berita",
    }
  );
  return Berita;
};

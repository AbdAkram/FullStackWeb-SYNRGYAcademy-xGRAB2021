'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      comment.belongsTo(models.Berita, {
        foreignKey: 'idBerita',
      })
      comment.belongsTo(models.user,{
        foreignKey: "idUser",
      });
    }
  };
  comment.init({
    idUser: DataTypes.INTEGER,
    idBerita: DataTypes.INTEGER,
    tanggalKomen: DataTypes.STRING,
    isiKomen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};
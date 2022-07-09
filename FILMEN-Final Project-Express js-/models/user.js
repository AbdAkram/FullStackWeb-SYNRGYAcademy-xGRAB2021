'use strict';
const {
  Model
} = require('sequelize');
const bcryptjs = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      user.hasMany(models.comment, {
        foreignKey: 'idUser',
      })
    }
    static #encrypt = (password) => bcryptjs.hashSync(password, 10)

    static register = ({ fullname, email, password, isAdmin, isSubscribe, isLogin }) => {
      const encryptedPassword = this.#encrypt(password)

      return this.create({ fullname, email, password :encryptedPassword, isAdmin, isSubscribe, isLogin })
    }
  };
  
  user.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    isSubscribe: DataTypes.BOOLEAN,
    isLogin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
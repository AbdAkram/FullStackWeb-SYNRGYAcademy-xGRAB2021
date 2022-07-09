const fs = require("fs");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
module.exports = {
  development: {
    username: process.env.NAME,
    password: process.env.PASSWORD,
    database: "filmen",
    host: "127.0.0.1",
    port: process.env.PORT_DATABASE,
    dialect: "postgres",
  },
  test: {
    username: "database_test",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "null",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};

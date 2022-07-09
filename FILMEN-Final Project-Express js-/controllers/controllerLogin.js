const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  // Menampilkan halaman login
  getLogin(req, res) {
    res.render("login.ejs");
  },
  // Authentication login
  postLogin(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then(function (data) {
        // Kalo username nya ada generate password dan decrypt password menggunakan bcrypt
        if (data) {
          bcrypt.compare(
            req.body.password,
            data.password,
            function (err, result) {
              // Kalo username ada dan password valid, maka berhasil login
              if (result) {
                const token = jwt.sign(data, "rahasia");
                res.status(201).json(token);
                console.log(token);
              }
              // Kalo username ada dan password tidak valid, maka gagal login
              else {
                throw { name: "password", message: "Password Salah" };
              }
            }
          );
        }
      })
      // Error kalo username tidak ada
      .catch(function (err) {
        next(err);
      });
  },
};

const {user} = require("../models");
const bcrypt = require("bcryptjs")
module.exports = {
  // Menampilkan halaman register
  getRegister(req, res) {
    res.render("register.ejs");
  },
  postRegister(req, res) {
    user.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password,10),
    })
      .then(function (data) {
        res.redirect('/')
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
 
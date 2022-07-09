const { Berita, comment, user, kategori } = require("../models");
const { Op } = require("sequelize");
module.exports = {
  // Menampilkan halaman homepage
  getHomePage(req, res, next) {
    // Mengambil semua data berita
    Berita.findAll()
      .then((data) => {
        if (data) {
          res.render("homepage.ejs", { page: "home" });
        } else {
          throw { tipeError: "dataKosong" };
        }
      })
      .catch(function (err) {
        next(err);
      });
  },
  // getHome(req, res) {
  //   res.render("components/loginHomePage");
  // },
  getDataByKategori(req, res, next) {
    Berita.findAll({
      include: {
        model: kategori,
        where: {
          namaKategori: req.params.kategori,
        },
      },
    })
      .then((data) => {
        if (data) {
          console.log(JSON.stringify(data, null, 2));
          res.render("page_kategori.ejs", { data, page: req.params.kategori });
        } else {
          throw { tipeError: "dataKosong" };
        }
      })
      .catch(function (err) {
        next(err);
      });
  },
  getDataSearch(req, res, next) {
    Berita.findAll({
      where: {
        judulBerita: {
          [Op.substring]: `${req.params.judul}`,
        },
      },
    })
      .then((data) => {
        if (data) {
          console.log(JSON.stringify(data, null, 2));
          res.render("search_pages.ejs", { data, search: req.params.judul });
        } else {
          throw { tipeError: "dataKosong" };
        }
      })
      .catch(function (err) {
        next(err);
      });
  },
};

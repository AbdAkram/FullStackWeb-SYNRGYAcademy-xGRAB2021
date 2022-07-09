const { Berita, comment, user, kategori } = require("../models");

module.exports = {
  getHalamanVideo(req, res, next) {
    res.render("halaman_video.ejs", { page: "home" });
  },
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
};

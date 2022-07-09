const { Berita } = require("../models");
module.exports = {
  // Menampilkan halaman detail berita
  getDetailBerita(req, res, next) {
    // Mengambil data berdasarkan judul
    Berita.findOne({
      where: {
        judulBerita: req.params.judulBerita,
      },
    })
      .then((data) => {
        if (data) {
          res.render("detailNews-berita.ejs", { data });
        } else {
          throw { tipeError: "dataKosong" };
        }
      })
      .catch(function (err) {
        next(err);
      });
  },
};

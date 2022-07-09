const { Berita } = require("../models");
module.exports = {
  // Menampilkan halaman serial news
  getSerialNews(req, res, next) {
    // Mengambil data berita berdasarkan movie news
    Berita.findOne({
      where: {
        isSerialNews: true,
      },
    })
      .then((data) => {
        if (data) {
          console.log(data);
          res.render("serialnews.ejs", { data, page: "home" });
        } else {
          throw { tipeError: "dataKosong" };
        }
      })
      .catch(function (err) {
        next(err);
      });
  },
  getDataByKategori(req, res, next) {
    Berita.findAll({
      include: {
        model: kategori,
        where: {
          [Op.and]: [
            { namaKategori: req.params.kategori },
            { isSerialNews: true },
          ],
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

module.exports = {
  errDataNotFound(err, req, res, next) {
    // Kalo error datanya kosong
    console.log(err.tipeError);
    if (err.tipeError === "dataKosong") {
      res.status(404).render("error.ejs", {
        error: {
          data: 500,
        },
        err404: "404 Tidak Ditemukan",
      });
    } else {
      res.status(500).render("error.ejs", {
        error: {
          data: 500,
        },
        err500: "500 Server Error",
      });
    }
  },
};

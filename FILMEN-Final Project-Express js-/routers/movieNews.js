const router = require("express").Router();
const controllerMovieNews = require("../controllers/controllerMovieNews");

// Get Detail Berita
router.get("/", controllerMovieNews.getMovieNews);
router.get("/kategori/:kategori", controllerMovieNews.getDataByKategori);

module.exports = router;

const router = require("express").Router();
const controllerSerialNews = require("../controllers/controllerSerialNews");

// Get Detail Berita
router.get("/", controllerSerialNews.getSerialNews);
router.get("/kategori/:kategori", controllerSerialNews.getDataByKategori);

module.exports = router;

const router = require("express").Router();
const controllerHomePage = require("../controllers/controllerHomePage");

// Get halaman homepage
router.get("/", controllerHomePage.getHomePage);
router.get("/kategori/:kategori", controllerHomePage.getDataByKategori);
router.get("/search/:judul", controllerHomePage.getDataSearch);

module.exports = router;

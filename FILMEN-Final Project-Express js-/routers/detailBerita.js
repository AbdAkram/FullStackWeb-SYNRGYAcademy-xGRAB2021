const router = require("express").Router();
const controllerDetailBerita = require("../controllers/controllerDetailBerita");

// Get Detail Berita
router.get("/:judulBerita", controllerDetailBerita.getDetailBerita);

module.exports = router;

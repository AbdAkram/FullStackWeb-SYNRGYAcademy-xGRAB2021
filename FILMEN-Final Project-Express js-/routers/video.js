const router = require("express").Router();
const controllerHalamanVideo = require("../controllers/controllerHalamanVideo");

// Get video
router.get("/", controllerHalamanVideo.getHalamanVideo);
router.get("/kategori/:kategori", controllerHalamanVideo.getHalamanVideo);

module.exports = router;

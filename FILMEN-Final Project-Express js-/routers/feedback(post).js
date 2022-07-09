const router = require("express").Router();
const controllerFeedback = require("../controllers/controllerFeedback");

// Get Detail Berita
router.get("/", controllerFeedback.getFeedback);

module.exports = router;

const router = require("express").Router();
const controllerLogin = require("../controllers/controllerLogin");

// Get halaman login
router.get("/", controllerLogin.getLogin);

// Post authentication login
router.post("/", controllerLogin.postLogin);

module.exports = router;

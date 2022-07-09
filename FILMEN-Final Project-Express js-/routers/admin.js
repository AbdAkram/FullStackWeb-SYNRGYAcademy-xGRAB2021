const router = require("express").Router();
const controllerAdmin = require("../controllers/controllerAdmin");

// Get halaman login
router.get("/", controllerAdmin.getAdmin);


module.exports = router;
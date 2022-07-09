const router = require("express").Router();
const controllerAdminUpdate = require("../controllers/controllerAdminUpdate");

// Get halaman update
router.get("/", controllerAdminUpdate.getAdminUpdate);


module.exports = router;
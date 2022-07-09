const router = require("express").Router();
const controllerRegister = require("../controllers/controllerRegister");

// Get halaman register
router.get("/", controllerRegister.getRegister);

router.post("/", controllerRegister.postRegister);
module.exports = router;

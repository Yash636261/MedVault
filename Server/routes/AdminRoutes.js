const { getAdmin } = require("../controllers/AdminController");
const router = require("express").Router();

router.get("/getadmin", getAdmin);

module.exports = router;

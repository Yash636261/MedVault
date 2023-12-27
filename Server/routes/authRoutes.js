const { Router } = require("express");
const { login, auth ,doclogin} = require("../controllers/authControllers");

const router = Router();

// router.get("/auth", auth);
router.post("/login", login);
router.post("/doclogin",doclogin );

module.exports = router;

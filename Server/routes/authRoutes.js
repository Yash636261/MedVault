const { Router } = require("express");
const { login, auth ,doclogin, doctorSignup} = require("../controllers/authControllers");
const { addDoctor} = require("../controllers/DoctorController");

const router = Router();

// router.get("/auth", auth);
router.post("/login", login);
router.post("/adddoctor", doctorSignup);
router.post("/doclogin",doclogin );

module.exports = router;

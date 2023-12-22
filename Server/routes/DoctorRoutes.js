const { getDoctorById, addDoctor } = require("../controllers/DoctorController")
const router = require("express").Router();

router.post("/adddoctor", addDoctor);
router.get("/doctor/:doctorId", getDoctorById);

module.exports = router;
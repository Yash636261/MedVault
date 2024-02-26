const { getalldoctor, getDoctorById, addDoctor, updateDoctor,deleteDoctor } = require("../controllers/DoctorController")
const router = require("express").Router();

// router.post("/adddoctor", addDoctor);
router.get("/alldoctor",getalldoctor);
router.get("/doctor/:doctorId", getDoctorById);

router.put("/updatedoctor/:doctorId", updateDoctor); // Update patient information
router.delete("/deletedoctor/:doctorId", deleteDoctor); // Delete a patient

module.exports = router;
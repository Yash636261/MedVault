const { getAllPatients, addPatient, updatePatient, deletePatient,getPatientById, addMedicalRecord } = require("../controllers/PatientController"); // Import the updated controller
const router = require("express").Router();

router.get("/allpatients", getAllPatients); // Get all patients
router.post("/addpatient", addPatient); // Add a new patient
router.put("/updatepatient/:patientId", updatePatient); // Update patient information
router.delete("/deletepatient/:patientId", deletePatient); // Delete a patient
router.get('/getpatient/:patientId', getPatientById);
router.get('/test/:patientId', getPatientById);


module.exports = router;

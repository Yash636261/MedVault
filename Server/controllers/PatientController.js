const Patient = require("../models/Patient");

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const { patientId } = req.params;
    const patient = await Patient.findById(patientId);

    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.status(200).json(patient);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
};

exports.addPatient = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      bloodGroup,
      gender,
      email,
      phone,
      street,
      city,
      state,
      postalCode,
      diseases,
    } = req.body;

    const newPatient = new Patient({
      firstName,
      lastName,
      dateOfBirth,
      bloodGroup,
      gender,
      email,
      phone,
      street,
      city,
      state,
      postalCode,
      diseases,
    });
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const { patientId } = req.params;
    const updatedPatient = await Patient.findByIdAndUpdate(
      patientId,
      req.body,
      { new: true }
    );
    if (!updatedPatient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.status(200).json(updatedPatient);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    console.log("hi");
    const { patientId } = req.params;
    const deletedPatient = await Patient.findByIdAndDelete(patientId);
    if (!deletedPatient) {
      return res.status(404).json({ error: "Patient not found" });
    }
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

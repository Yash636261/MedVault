const Doctor = require("../models/Doctor");

exports.getalldoctor = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res
        .status(404)
        .json({ error: "Doctor you are looking for doesn't exists." });
    }
    res.status(200).json(doctor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.addDoctor = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      contact,
      gender,
      email,
      bloodGroup,
      street,
      city,
      password,
      state,
      postalCode,
      specialization,
    } = req.body;

    const newDoctor = new Doctor({
      firstName,
      lastName,
      dateOfBirth,
      contact,
      gender,
      email,
      bloodGroup,
      street,
      city,
      password,
      state,
      postalCode,
      specialization,
    });

    const savedDoctor = await newDoctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error:" });
  }
};

exports.updateDoctor = async (req, res) => {
    try {
      const { doctorId } = req.params;
      const updatedDoctor = await Doctor.findByIdAndUpdate(
        doctorId,
        req.body,
        { new: true }
      );
      if (!updatedDoctor) {
        return res.status(404).json({ error: "Patient not found" });
      }
      res.status(200).json(updatedDoctor);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Server error" });
    }
  };
  
  exports.deleteDoctor = async (req, res) => {
    try {
      const { doctorId } = req.params;
      const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);
      if (!deletedDoctor) {
        return res.status(404).json({ error: "Patient not found" });
      }
      res.status(200).json({ message: "doctor deleted successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Server error" });
    }
  };
  
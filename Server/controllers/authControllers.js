const Admin = require("../models/Admin");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const { comparePassword, hashPassword } = require("./../helpers/authHelper");
const { createToken } = require("../utils/createToken");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(password);
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(401)
        .json({ error: "Invalid credentials. Please try again." });
    }
    const match = await comparePassword(password, admin.password);
    if (password === admin.password) {
      console.log("success");
    } else {
      return res.status(401).send({
        success: false,
        message: "Invalid Password",
      });
    }
    res.status(200).json({ message: "Login successful!", admin });
  } catch (error) {
    console.error("Error logging in admin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.doclogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res
        .status(404)
        .json({ error: "User doesn't exists." });
    }
    const auth = await bcrypt.compare(password, doctor.password);
    if (!auth) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token =createToken(doctor._id);
    res.cookie("token", token, { withcredentials: true, httpOnly: false });
    res.status(201).json({ message: "Login successful!", doctor,sucess:true, token});
  } catch (error) {
    console.error("Error logging in doctor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.doctorSignup = async (req, res) => {
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

    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ error: "Doctor already exists" });
    }

    const doctor = await Doctor.create({
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
    const token = createToken(doctor._id);
    res.cookie("token", token, { withcredentials: true, httpOnly: false });
    res.status(201).json({doctor,success: true, token});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error:" });
  }
};
const Admin = require("../models/Admin");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const { comparePassword, hashPassword } = require('./../helpers/authHelper');

exports.login = async(req,res)=>{
  try {
    console.log("hi");
    const { email, password } = req.body;
    console.log(password)

    const admin = await Admin.findOne({ email });
    if(!admin){
      return res.status(401).json({error: 'Invalid credentials. Please try again.' });
    }

    console.log(admin);

    const match = await comparePassword(password, admin.password);
    if(password === admin.password){
      console.log('success');
    }else{
      return res.status(401).send({
        success: false,
        message: "Invalid Password",
      });
    }
    res.status(200).json({ message: 'Login successful!', admin });
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

exports.doclogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      return res.status(401).json({ error: 'Invalid credentials. Please try again.' });
    }

     const match = await comparePassword(password, doctor.password);
    if(password === doctor.password){
      console.log('success');
    }else{
      return res.status(401).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // Passwords match, login successful
    res.status(200).json({ message: 'Login successful!', doctor });
  } catch (error) {
    console.error('Error logging in doctor:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// exports.registerDoctor = async (req, res) => {
//   try {
//     const {
//       firstName,
//       lastName,
//       dateOfBirth,
//       contact,
//       gender,
//       email,
//       bloodGroup,
//       street,
//       city,
//       password,
//       state,
//       postalCode,
//       specialization,
//     } = req.body;

//     // Check if doctor with the same email already exists
//     const existingDoctor = await Doctor.findOne({ email });
//     if (existingDoctor) {
//       return res.status(400).json({ error: 'Doctor with this email already exists.' });
//     }

//     // Create a new doctor
//     const newDoctor = new Doctor({
//       firstName,
//       lastName,
//       dateOfBirth,
//       contact,
//       gender,
//       email,
//       bloodGroup,
//       street,
//       city,
//       password,
//       state,
//       postalCode,
//       specialization,
//     });

//     // Save the doctor to the database
//     await newDoctor.save();

//     res.status(201).json({ message: 'Doctor registered successfully!', doctor: newDoctor });
//   } catch (error) {
//     console.error('Error registering doctor:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
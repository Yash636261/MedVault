const Doctor = require('../models/Doctor');

// exports.getalldoctor= async (req,res) =>{
//      try {
//      } catch (error) {
        
//     }
// }

exports.getDoctorById = async (req,res) =>{
try {
    const { doctorId} =req.params;
    const doctor = await Doctor.findById(doctorId);

    if(!doctor){
        return res.status(404).json({ error: "Doctor you are looking for doesn't exists."})
    }
    res.status(200).json(doctor);
} catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error"})
}
}

exports.addDoctor = async (req,res) =>{
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
            state,
            postalCode,
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
            state,
            postalCode,
        })

        const savedDoctor = await newDoctor.save();
        res.status(201).json(savedDoctor);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server error:"})
        
    }
}
const Admin = require('../models/Admin')

exports.getAdmin = async (req,res)=>{
    try {
        const admin = await Admin.find();
        res.status(200).json(admin);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server error."})
    }
}
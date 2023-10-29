const mongoose = require("mongoose");

const projectAdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    idNumber:{
        type: String,
        required: true,
    }
})

const ProjectsSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectDesc: {
        type: String,
        required: true
    },
    projectTask: {
        type: Array,
        required: false
    }
})

const Admin = mongoose.model("Admin",projectAdminSchema);
const Project = mongoose.model("Project",ProjectsSchema);

module.exports = {Admin,Project};
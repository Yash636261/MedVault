const { Admin, Project } = require("../models/ProjectAdmin");

exports.getAllProjects = async (req, res) => {
  try {
    const Projects = await Project.find();
    res.json(Projects);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.addProject = async (req, res) => {
  try {
    const { projectName, projectDesc, projectTask } = req.body;

    const newProject = new Project({
      projectName,
      projectDesc,
      projectTask
    });

    const savedSubject = await newProject.save();

    res.json(savedSubject);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { _id } = req.params;
    const { projectName, projectDesc} = req.body;

    // Check if the project exists
    const existingProject = await Project.findById(_id);

    if (!existingProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Update project details
    existingProject.projectName = projectName;
    existingProject.projectDesc = projectDesc;

    // Save the updated project
    const updatedProject = await existingProject.save();

    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { _id }= req.body;

    const existingProject = await Project.findById(_id);

    if(!existingProject){
        return res.status(404).json({error: 'Project not found.'})
    }

    const deletedProject = await Project.findByIdAndRemove(_id);

    if(!deletedProject){
        return res.status(404).json({error: 'This Project does not exists.'});
    }

    res.json({message: 'Project deleted successfully.'})
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.'});
  }
};

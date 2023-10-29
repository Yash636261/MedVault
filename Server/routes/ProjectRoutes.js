const {getAllProjects,addProject,updateProject,deleteProject} = require('../controllers/ProjectController');
const router = require('express').Router()

router.get('/allprojects',getAllProjects);
router.post('/addproject',addProject);
router.put('/updateproject/:_id',updateProject);
router.delete('/deleteproject',deleteProject);

module.exports = router;
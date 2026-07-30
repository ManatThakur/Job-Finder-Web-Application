const express=require('express');
const jobRouter=express.Router();
const jobsController=require('../controllers/jobsController');
const authenticate=require('../middleware/authenticate.js');

jobRouter.get('/',authenticate.authenticate, jobsController.GetAllJobs);



module.exports=jobRouter;
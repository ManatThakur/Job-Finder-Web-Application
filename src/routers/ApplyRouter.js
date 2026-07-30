const express=require('express');
const ApplyRouter=express.Router();
const ApplyController=require('../controllers/ApplyController');
const authenticate=require('../middleware/authenticate.js');

ApplyRouter.get('/',authenticate.authenticate, ApplyController.postAppliedJobs);
ApplyRouter.post('/',authenticate.authenticate, ApplyController.postAppliedJobs);



module.exports=ApplyRouter;
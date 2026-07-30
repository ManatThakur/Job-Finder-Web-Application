const express=require('express');
const searchRouter=express.Router();
const searchController=require('../controllers/searchController');
const authenticate=require('../middleware/authenticate.js');

searchRouter.post('/',authenticate.authenticate,searchController.searchJobs);



module.exports=searchRouter;
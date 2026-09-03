const express=require('express');
const searchRouter=express.Router();
const searchController=require('../controllers/searchController');

searchRouter.post('/', searchController.searchJobs);

module.exports=searchRouter;
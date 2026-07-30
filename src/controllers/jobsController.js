const path =require('path');

 const jobsapplied=require('../model/coll');

 const GetAllJobs = (req, res) => {
    res.render('jobs');
    
 }
 
 module.exports={GetAllJobs,};
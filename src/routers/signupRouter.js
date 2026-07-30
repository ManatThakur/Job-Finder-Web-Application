const express=require('express');
const signRouter=express.Router();
const signupController=require('../controllers/signupController');
const upload = require("../db/multer");
signRouter.get('/',signupController.signing);
signRouter.post('/',upload.single("resume"),signupController.signing);
module.exports=signRouter;

const express=require('express');
const LoginRouter=express.Router();
const loginController=require('../controllers/loginController');


LoginRouter.get('/', loginController.UserLogin);
LoginRouter.post('/',loginController.UserLogin);

module.exports=LoginRouter;
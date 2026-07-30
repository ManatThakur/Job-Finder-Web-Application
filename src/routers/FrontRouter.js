const express=require('express');
const FrontRouter=express.Router();
const frontPage=require('../controllers/frontPage');
const authenticate=require('../middleware/authenticate.js');

console.log("authenticate:", authenticate);

FrontRouter.get('/',authenticate.authenticate, frontPage.GetPage);

module.exports=FrontRouter;
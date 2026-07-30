const path=require('path');
const loginModel=require('../model/usermodel.js');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

async function signing(req,res) {
      if(req.method==="GET"){
        return res.render('Signup');
      }
      if(req.method ==="POST"){
         try{
         const {name,email,password}=req.body;
         const existingUser = await loginModel.findOne({email});
         if(existingUser){
          return res.status(400).send('User is already registered');
         }
         const hashedpass= await bcrypt.hash(password,10);
         const newUser= await loginModel.create({
          FullName:name,
          email:email,
    password:hashedpass,
    resume: req.file ? req.file.path : ""
         });
        res.redirect('/login');
         }
         catch(error){
          console.error(error);
        res.status(500).send("Signup Failed");
         }

      }
}
module.exports={signing};
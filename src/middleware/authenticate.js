const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

const authenticate=(req,res,next)=>{
    try{
         const token=req.cookies.token;
         console.log('authenticate token:', token);
          if(!token){
            console.log('authenticate: no token, redirecting to login');
            return res.redirect("/login");
          }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        console.log('authenticate decoded:', decoded);
        req.user=decoded;
        next();

}
catch (error) {

        return res.redirect("/login");

    }




}

module.exports={authenticate};

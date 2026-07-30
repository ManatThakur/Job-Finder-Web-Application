const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
  FullName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
     resume: {
        type: String,   // Stores the filename or path
        default: " "
    }
})
const loginModel=mongoose.model('users',UserSchema);
module.exports=loginModel;
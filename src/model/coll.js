const mongoose=require('mongoose');
const Applied=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    company_name:String,
    title:String,
    location:String,
    remote:String
})
const jobsapplied= mongoose.model("jobs",Applied);
module.exports=jobsapplied;
const jobsapplied = require("../model/coll");

const searchJobs = async (req,res)=>{

    try{

        const {job,location}=req.body;

        const jobs=await jobsapplied.find({

            title:{
                $regex:job,
                $options:"i"
            },

            location:{
                $regex:location,
                $options:"i"
            }

        });
           console.log(jobs);
        res.json(jobs);


    }
    catch(err){

        console.log(err);

        res.status(500).json({
            message:"Server Error"
        });

    }

}

module.exports={
    searchJobs
};
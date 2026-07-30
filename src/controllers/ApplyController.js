const path=require('path');
const jobsapplied=require('../model/coll');

 const postAppliedJobs = async (req, res) => {
    try {
        const userId = req.user?.id || req.user?._id;
        console.log('ApplyController userId:', userId, 'method:', req.method);
        if (!userId) {
            console.log('ApplyController missing req.user, redirecting to login');
            return res.redirect('/login');
        }

        if (req.method === "POST") {
            const job = req.body;

            const applyy = await jobsapplied.create({
                user: userId,
                company_name: job.company_name,
                title: job.title,
                location: job.location,
                remote: job.remote
            });

            console.log('Applied job saved:', applyy);
        }

        const alljobs = await jobsapplied.find({ user: userId });
        console.log('ApplyController found jobs count:', alljobs.length);
        res.render('Applied', { alljobs: alljobs });
    } catch (err) {
        console.error('ApplyController error:', err);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
    
};

module.exports = {
    postAppliedJobs,
    
};
const mongoose=require('mongoose');
 
async function connectDB() {
    
    const mongoUri = process.env.MONGO_URI;
try {
    await mongoose.connect(mongoUri);
    console.log("Database connected successfully");
} catch (err) {
    console.error(err);
    console.error(err.stack);
}
}
    

module.exports=connectDB;
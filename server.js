
require('dotenv').config();
const app=require('./src/app');
const connectDB = require('./src/db/db');
const PORT = process.env.PORT || 3005;

connectDB()
.then(()=>{
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});
})
.catch((err)=>{
    console.log(err);
});

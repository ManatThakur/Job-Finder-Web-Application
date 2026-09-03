
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const app=require('./src/app');
const connectDB = require('./src/db/db');
const PORT = process.env.PORT || 3005;

if (require.main === module) {
    connectDB()
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
        });
    })
    .catch((err)=>{
        console.error(err);
        process.exitCode = 1;
    });
} else {
    module.exports = async (req, res) => {
        await connectDB();
        return app(req, res);
    };
}

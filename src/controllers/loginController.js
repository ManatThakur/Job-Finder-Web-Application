const path = require('path');
const loginModel=require('../model/usermodel.js');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const UserLogin = async (req, res) => {
    // resolve path from project root: src/controllers -> ../../public/login.html
    if(req.method==='POST'){
try {

        const { email, password } = req.body;

        // Check if user exists
        const user = await loginModel.findOne({ email });

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send("Invalid password");
        }

        // Create JWT Token
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        // Store token in cookie for all routes
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            path: "/"
        });

        // Redirect after successful login
        res.redirect("/home");

    } catch (error) {

        console.log(error);
        res.status(500).send("Login Failed");

    }
    }
    else{
        res.render("login");
    }
}

module.exports = {
    UserLogin,
};
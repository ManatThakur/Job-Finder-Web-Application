const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");
const LoginRouter = require('./routers/loginRouter');
const jobRouter=require('./routers/Routerjob');
const FrontRouter=require('./routers/FrontRouter');
const ApplyRouter=require('./routers/ApplyRouter');
const signRouter=require('./routers/signupRouter');
const app = express();
app.set('view engine', 'ejs');

app.set("views", path.join(__dirname, '..', 'public'));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const searchRouter = require('./routers/searchRouter');




app.use(['/', '/home'], FrontRouter);

app.use('/login', LoginRouter);
app.use('/jobs', jobRouter);
app.use('/Applied',ApplyRouter);
app.use('/signup',signRouter);
app.use('/search',searchRouter);


module.exports = app;
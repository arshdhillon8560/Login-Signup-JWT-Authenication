const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');



mongoose.connect('mongodb://localhost:27017/authtestapp').then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.render("index");
});

app.post('/create', (req, res) => {

    const { username, email, password, age } = req.body;
   
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt,async function(err, hash) {
    const createdUser = await User.create({ username, email, password:hash, age });
    
    const token =jwt.sign({email:email},"shshshshshshshsh");

    res.cookie("token",token);

    res.send(createdUser);  

    });
});

});

app.get('/login',function (req,res){
  res.render('login');
})

app.post('/login',async function (req,res){
   const user= await User.findOne({email:req.body.email});
   if(!user) return res.send("Something went wrong");
   
   bcrypt.compare(req.body.password,user.password,function (err,result){
      if(result){
        const token =jwt.sign({email:user.email},"shshshshshshshsh");

        res.cookie("token",token);
        res.send("yes you can login");
      } 
   })

})

app.get("/logout", (req, res) => {
  res.cookie("token", '');
  res.redirect('/');
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

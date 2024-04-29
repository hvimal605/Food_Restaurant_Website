const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const jwt_secret ='harshkvimal'
const requireLogin = require('../middlewares/requireLogin')


router.get('/',(req,res)=>{
    res.send("hello")
})


router.post("/signup",(req,res)=>{
    const {name  , email , password}=req.body;
    if(!name || !email || !password){
        res.status(422).json({error:"please fill all details"})
    }

   User.findOne({email:email}).then((savedUser)=>{
    if(savedUser){
        return res.status(422).json({error:"user already exist with that email"})
    }
    bcrypt.hash(password,12).then((hashedPassword)=>{
        const user = new User({
            name,
            email,
            password:hashedPassword
        })
    
        user.save()
        .then(user=>{
            res.json({
                message:'Registered  succesfully'
            })
        })
        .catch(error=>{
            console.log(error)
        })
    })
    
       }) 
    })


    // router.post("/signin", (req, res) => {
    //     const { email, password } = req.body;
    
    //     if (!email || !password) {
    //         return res.status(422).json({ error: "Please add email and password" })
    //     }
    //     User.findOne({ email: email }).then((savedUser) => {
    //         if (!savedUser) {
    //             return res.status(422).json({ error: "Invalid email" })
    //         }
    //         bcrypt.compare(password, savedUser.password).then((match) => {
    //             if (match) {
    //                 // return res.status(200).json({ message: "Loggedin in sucessfully" })
                
    //                 const token = jwt.sign({ _id: savedUser.id }, jwt_secret)
    //                 console.log(token)
    //                 res.json(token)
                    
    //             } else {
    //                 return res.status(422).json({ error: "Invalid password" })
    //             }
    //         })
    //             .catch(err => console.log(err))
    //     })
    // }) 

    router.post("/signin", (req, res) => {
        const { email, password } = req.body;
    
        if (!email || !password) {
            return res.status(422).json({ error: "Please add email and password" })
        }
    
        User.findOne({ email: email }).then((savedUser) => {
            if (!savedUser) {
                return res.status(422).json({ error: "Invalid email" })
            }
    
            bcrypt.compare(password, savedUser.password).then((match) => {
                if (match) {
                    // Check if the user is an admin
                    if (email === 'admin@gmail.com' && password === 'admin#12345678') {
                        // If user is admin, redirect to admin portal
                        const token = jwt.sign({ _id: savedUser.id }, jwt_secret);
                        res.json({ token: token, isAdmin: true });
                    } else {
                        // If user is not admin, handle as usual
                        const token = jwt.sign({ _id: savedUser.id }, jwt_secret);
                        res.json({ token: token, isAdmin: false });
                    }
                } else {
                    return res.status(422).json({ error: "Invalid password" })
                }
            })
            .catch(err => console.log(err))
        })
    })
    
    
    


module.exports =router;

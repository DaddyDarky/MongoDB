const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User= require('../models/User')

router.get('/',(req,res)=>{
    res.render('index')
});

router.get('/register',(req,res)=>{
    res.render('register')
});

router.post('/register',async (req,res)=>{
    const {username,password,email}=req.body;

    const newUser = new User({
        username: username,
        password: bcrypt.hashSync(password,10),
        email: email
        });
    try {
        await newUser.save();
        res.send("Datos enviados corectamente")
    } catch (error) {
        res.send('Error al meter usuario')
    }
    
})
module.exports=router;
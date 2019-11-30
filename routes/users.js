const express = require('express');
const router = express.Router();
// const User = require('../models/User');

//login page
router.get('/login', (req,res)=> res.render('login'));
//register page

router.get('/register', (req,res)=>{
    res.render('register');
})
router.get('/register', (req,res)=> res.render('reg'));


//registration handle
router.post('/register', async (req,res)=>{
    const {name,email,password,password2} =  await req.body;
    let errors = [];
    //check required fields
    if(!name || !email || !password || !password2){
        errors.push({msg: 'Please fill in all fields'});
    }
    //checkpassword match
    if(password !==password2){
        errors.push({msg: 'Passwords do not match'});
    }
    //check lenght of password
    if(password.lenght <6){
        errors.push({msg: 'Password should be atleast 6 characters long'});
    }

    console.log(errors);
    if(errors.length>0){
        // res.render('register', {
        //     errors,
        //     name,
        //     email,
        //     password,
        //     password2
        // });
        res.send(errors)
        res.send('Error')
    }else{
        res.render('login');
    }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

var { User }= require('../model/User')

// Register Router
router.route('/').post((req,res)=>{
    let user = new User(req.body);
    user.password=bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(8),null);
    user.save()
    .then(reg=>{
        res.send(reg);
    })
    .catch(err=>{
        res.status(400).send("Failed to store in database");
    })
})

module.exports=router;
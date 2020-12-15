const express=require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

var { User } = require('../model/User');
// Login Route
router.route("/").post((req,res)=>{
    User.findOne({username:req.body.username})
    .then(user=>{
        if(!user) res.sendStatus(204);
        else{
            bcrypt.compare(req.body.password,user.password)
            .then(passwordMatch=>passwordMatch? res.send("Login success"):res.send("Login failure"));
        }
    });
});

module.exports = router;
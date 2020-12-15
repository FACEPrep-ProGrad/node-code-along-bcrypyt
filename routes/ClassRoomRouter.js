const express = require('express');
const router = express.Router();

// Import the model classes
const { ClassRoom } = require('../model/ClassRoom');
const { User } = require('../model/User');

// Create a class
router.route('/create/').post((req,res)=>{
    let classroom = new ClassRoom(req.body);
    classroom.save()
    .then(reg=>{res.send(reg);})
    .catch((err)=>{res.send("Failed to store "+err);
});
});
router.post(("/map/:id/:grade"),(req, res) => {
    let usr, clas;
    User.findOne({username : req.params.id}, (err, data) => {
        usr = new User(data);
    })
    ClassRoom.findOne({grade : req.params.grade}, (err,data) => {
        clas = new ClassRoom(data);
        clas.user.push(usr)
        clas.save()
        .then(reg => {res.send(reg); })
        .catch(err => { res.send("Failed to store to database"+err); });
    })
});


// Get allClass detail
router.get("/user",(req,res)=>{
    ClassRoom.find((err,data)=>err?res.status(400).send("Error Occured"):res.json(data));
});

module.exports = router;
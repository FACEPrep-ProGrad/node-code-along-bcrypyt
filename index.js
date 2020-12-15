require("./config/mongo");

const express = require('express');
const server = express();
const register = require('./routes/RegisterRouter');
const login = require('./routes/LoginRouter');
const Class = require('./routes/ClassRoomRouter');

server.use(express.json());

server.listen(3000,()=>{
    console.log("server started at @http://localhost:3000");
})
server.use('/class', Class);
server.use('/login',login);
server.use('/register',register);

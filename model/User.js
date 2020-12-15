const mongoose = require('mongoose'),Schema = mongoose.Schema;

const UserDetail = new Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    emailID: String,
    phoneNumber: Number,
    role: Number
});

const User =  mongoose.model('User', UserDetail);
module.exports = {User};
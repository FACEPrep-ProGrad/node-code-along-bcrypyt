const mongoose = require('mongoose'), Schema = mongoose.Schema;
var { User } = require('./User');

const ClassRoomSchema = new Schema({
    grade: Number,
    section: String,
    user: [{type:Schema.Types.ObjectId,ref:"User"}]
});

const ClassRoom = mongoose.model('Class', ClassRoomSchema);
module.exports = { ClassRoom }
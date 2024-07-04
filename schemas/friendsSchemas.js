
const mongoose = require("mongoose");

const friendsSchema = mongoose.Schema({
    id : {type : String },
    profileImg : {type : String,},
    Name : {type : String,require : true},
    age : {type : Number, require : true},
    passion : {type : String, require : true},
    home : {type : String, require : true},
    thana : {type : String, require : true},
    zela : {type : String, require : true},
    myselfDescription : {type : String, require : true},

})

module.exports = friendsSchema;
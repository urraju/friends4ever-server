
const mongoose = require("mongoose");

const categorySchemas = mongoose.Schema({
    id : {type : String },
    categoryImg : {type : String,},
    Name : {type : String,require : true},
   

})

module.exports = categorySchemas;
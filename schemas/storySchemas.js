
const mongoose = require("mongoose");

const  storySchemas = mongoose.Schema({
    id : {type : String },
    story_name : {type : String, require : true},
    category : {type : String, require : true},
    story_date : {type : String, require : true},
    story_image : {type : String},
    story_des : {type : String, require : true},
    like : {type : Number, require : true},
   

})

module.exports = storySchemas;
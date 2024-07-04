const mongoose = require("mongoose");

const userSchemas = mongoose.Schema({
  _id: { type: String },
  name: { type: String },
  password: { type: Number },
  email: { type: String },
  profileImg: { type: String },
  role : {type : String}
});

module.exports = userSchemas;

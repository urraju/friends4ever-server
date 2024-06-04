const  mongoose = require("mongoose");
const friendsSchema = require('../../schemas/friendsSchemas')
const Friends = new mongoose.model("Friends", friendsSchema);

exports.getFriends = async (req, res) => {
    const result = await Friends.find();
    res.send(result);
  };
  
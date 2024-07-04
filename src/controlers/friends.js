const mongoose = require("mongoose");
const friendsSchema = require("../../schemas/friendsSchemas");
const Friends = new mongoose.model("Friends", friendsSchema);

exports.getFriends = async (req, res) => {
  const result = await Friends.find();
  res.send(result);
};

exports.getSingleFriends = async (req, res) => {
  const id = req.params.id;

  // Validate the provided ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ error: "Invalid ID format" });
  }

  try {
    const filter = { _id: id };
    const result = await Friends.findById(filter);

    if (!result) {
      return res.status(404).send({ error: "Friend not found" });
    }

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error fetching friend data" });
  }
};

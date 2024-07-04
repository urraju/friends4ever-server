const mongoose = require("mongoose");
const userSchemas = require("../../schemas/userSchemas");
const Users = new mongoose.model("Users", userSchemas);

exports.postUsers = async (req, res) => {
  const quire = req.body;
  try {
    const result = await Users.create(quire);
    if (result) {
      return res.status(200).send({ result: "Users post successfull" });
    }
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error Posting users data" });
  }
};

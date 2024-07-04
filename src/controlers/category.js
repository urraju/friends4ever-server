const mongoose = require("mongoose");
const categorySchema = require("../../schemas/categorySchemas");
const Category = new mongoose.model("category", categorySchema);

exports.getCategory = async (req, res) => {
  const result = await Category.find()
  res.send(result)
};

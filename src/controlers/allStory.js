const mongoose = require("mongoose");
const storySchema = require("../../schemas/storySchemas");
const Story = new mongoose.model("story", storySchema);

exports.postStory = async (req, res) => {
  try {
    const result = await Story.create(req.body);
    if (result) {
      return res.status(200).send({ success: "Story post successfull" });
    }
    res.send(result)
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error Posting story data" });
  }
};


exports.getCategoryStory = async (req, res) => {
  const category = req.params.categoryStory;

  // Validate the provided ID
  

  try {
    const filter = { category: category };
    const result = await Story.find(filter);

    if (!result) {
      return res.status(404).send({ error: "Friend not found" });
    }

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error fetching friend data" });
  }
};

const mongoose = require("mongoose");
const storySchema = require("../../schemas/storySchemas");
const Story = new mongoose.model("stories", storySchema);

exports.postStory = async (req, res) => {
  try {
    const result = await Story.create(req.body);
    if (result) {
      return res.status(200).send({ success: "Story post successfull" });
    }
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error Posting story data" });
  }
};

exports.getCategoryStory = async (req, res) => {
  const category = req.params.categoryStory;
  // console.log(category, 'category');
  try {
    const filter = { category: category };
    const result = await Story.find(filter);

    if (!result) {
      return res.status(404).send({ error: "Stories not found" });
    }

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error fetching stories data" });
  }
};

exports.getSingleStory = async (req, res) => {
  console.log(req.params);
  const id = req.params.id;

  // // Validate the provided ID
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(400).send({ error: "Invalid ID format" });
  // }

  // try {
  const filter = { _id: id };
  const result = await Story.findOne(filter);

  // if (!result) {
  //   return res.status(404).send({ error: "Stories not found" });
  // }

  res.send(result);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send({ error: "Error fetching stories data" });
  // }
};

const express = require("express");
const mongoose = require("mongoose");
const router = require("./src/routes/api");
const app = express();
const port = 8000;
app.use(express.json());

// database connection with mongoose
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/friends4ever");
    console.log("Database is Connected");
  } catch (error) {
    console.log("Database is not connected");
    console.log(error);
    process.exit(1);
  }
};

app.use('/', router)


app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})
// assign port 
app.listen(port, async () => {
  console.log(`App listening at port ${port}`);
  await connectDB();
});

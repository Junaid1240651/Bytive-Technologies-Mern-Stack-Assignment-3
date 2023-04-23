const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl =
  "mongodb+srv://junaid0000:junaid0000@cluster0.kuolmsq.mongodb.net/test";

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected!"));
const addProfileSchema = new mongoose.Schema({
  image: { type: String },
  username: { type: String },
  email: { type: String },
  number: { type: String },
  url: { type: String },
});
module.exports = mongoose.model("addProfile", addProfileSchema);

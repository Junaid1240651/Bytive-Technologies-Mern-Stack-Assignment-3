const express = require("express");
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
const AddProfile = require("./mongoDB/mongoDBConnectionAndSchema");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const addProfile = await AddProfile.find();
  res.status(201).json(addProfile);
});
app.post("/", async (req, res) => {
  try {
    const UpdateUSer = await AddProfile.findById(req.body.id);

    UpdateUSer.username = req.body.username;
    UpdateUSer.email = req.body.email;
    UpdateUSer.number = req.body.number;
    UpdateUSer.url = req.body.url;
    await UpdateUSer.save();
  } catch (err) {
    console.error("Error updating Job Post:", err.message);
  }
});

app.post("/addProfile", async (req, res) => {
  try {
    const { image, username, email, number, url } = req.body;
    const addProfile = await AddProfile.create({
      image,
      username,
      email,
      number,
      url,
    });
    res.status(201).json(addProfile);
  } catch (err) {}
});

app.listen(3000, () => {
  console.log("connected");
});

const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();

const connectionString = process.env.MONGO_CONNECTION_STRING;

const corsOptions = {
  origin: ['http://localhost:4200', 'https://miliwall.web.app']
}

mongoose.connect(connectionString)
  .then(_ => console.log("Connected to database!"))
  .catch(_ => console.log("Connection failed!", _));

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "angular", "browser")));

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "browser", "index.html"));
});

module.exports = app;

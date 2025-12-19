// logic for connecting to mongodb database

const mongoose = require('mongoose');
require("dotenv").config();

function connectDB() {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log("MongoDB connection error:", err);
    });
}

module.exports = connectDB;

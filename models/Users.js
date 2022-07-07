const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      
    },
    lname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    department: {
      type: String,
    },
    year: {
      type: String,
    },
    imagePath: {
      type: String
    },
    div: {
      type: String,
    },
    rollno: {
      type: String,
    },
    insta: {
      type: String,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },

    webdev: {
      type: String,
      default: "Not Interested"
    },
    gamedev: {
      type: String,
      default: "Not Interested"
    },
    appdev: {
      type: String,
      default: "Not Interested"
    },
    dataanaly: {
      type: String,
      default: "Not Interested"
    },
    management: {
      type: String,
      default: "Not Interested"
    },
    cp: {
      type: String,
      default: "Not Interested"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UserSchema);

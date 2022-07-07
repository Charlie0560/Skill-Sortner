const router = require("express").Router();
const User = require("../models/Users");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dtxkshwd3",
  api_key: "442996997661829",
  api_secret: "iqBET0Q3vnRlzsneahArIrT-SNU",
});

router.put("/:id", async (req, res) => {
  try {
    // const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
    //   folder: "avatars",
    //   width: 150,
    //   crop: "scale",
    // });
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
      const user = await User.findByIdAndUpdate(req.params.id, {
        fname: req.body.fname,
        lname: req.body.lname,
        department: req.body.department,
        year: req.body.year,
        div: req.body.div,
        rollno: req.body.rollno,
        github: req.body.github,
        insta: req.body.insta,
        linkedin: req.body.linkedin,
        webdev: req.body.webdev,
        appdev: req.body.appdev,
        gamedev: req.body.gamedev,
        dataanaly: req.body.dataanaly,
        cp: req.body.cp,
        management: req.body.management,
        imagePath: result.url,
      });
      console.log(user);
    });
    res.status(200).json("Updated");
    console.log("Account has be updated successfully");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// delete user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("Account has been deleted");
  } catch (err) {
    return res.json(err);
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const users = await User.find(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;

const router = require("express").Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    const emailRegex = /@ms.pict.edu|@pictsctr.onmicrosoft.com|@pict.edu/;
    const allemail = await User.findOne({ email: req.body.email });

    if (!emailRegex.test(email)) throw "Email is not supported";
    if (password.length < 6) throw "Password must be atleast of 6 characters";
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      fname,
      lname,
      password: hashedPass,
    });

    const user = !allemail
      ? await newUser.save()
      : res.json("This email is already taken");
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      errors.email = "User not found";
      res.status(404).json({ errors });
      // stop further execution in this callback
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // !validPassword && res.status(400).json("Wrong Credentials");
    if (!validPassword) {
      errors.validPassword = "User not found";
      res.status(400).json({ errors });
      // stop further execution in this callback
      return;
    }

    res.status(200).json(user);
    console.log(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;

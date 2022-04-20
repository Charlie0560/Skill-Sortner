const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

dotenv.config();

try {
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Connected to MONGODB");
  });
} catch (err) {
  console.log(err);
}

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use(bodyParser.urlencoded({
  extended: true,
  parameterLimit: 100000,
  limit: '500mb'
}));
app.use(bodyParser.json({limit: '500mb'}));

app.use(fileUpload())
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
// });

// const upload = multer({ storage: storage });
// app.post("/api/upload", upload.single("file"), (req, res) => {
//   try {
//     return res.status(200).json("File uploaded successfully");
//   } catch (err) {
//     console.log(err);
//   }
// });
cloudinary.config({
  cloud_name: 'dtxkshwd3',
  api_key: '442996997661829',
  api_secret: 'iqBET0Q3vnRlzsneahArIrT-SNU',
});
app.listen(5000, () => {
  console.log("Backend is running!");
});

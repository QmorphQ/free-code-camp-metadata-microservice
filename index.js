var express = require("express");
var cors = require("cors");
require("dotenv").config();
var app = express();
const multer = require("multer");
app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));
app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});
// *====================================================================
app.post("/api/fileanalyse", multer().single("upfile"), (req, res) => {
  let fileObj = req.file;

  res.json({
    name: fileObj.originalname,
    type: fileObj.mimetype,
    size: fileObj.size,
  });
});
// *====================================================================
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});

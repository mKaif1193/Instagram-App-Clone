const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    // const fn = crypto.randomBytes(16).toString("hex") + path.extname(file.originalname);
    // cb(null, fn);
    const unique = uuidv4();
    cb(null, unique + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
module.exports = upload;

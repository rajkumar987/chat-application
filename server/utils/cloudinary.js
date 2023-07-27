const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dbrbtprc5",
  api_key: "263246324255165",
  api_secret: "RGpqaCooEp9HxZtFWmcgiG1EDmY",
  secure: true,
});
module.exports = cloudinary;

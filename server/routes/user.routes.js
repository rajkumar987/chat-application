const express = require("express");
const UserController = require("../controllers/user.controller");
const router = express.Router();
const upload = require("../utils/multer");
module.exports = () => {
  router.post(
    "/create-profile/:id",
    upload.single("profile-pic"),
    UserController.createProfile
  );

  return router;
};

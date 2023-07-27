const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { validate } = require("../middlewares/validate.middleware");
const { sessionSchema } = require("../validations/index");
module.exports = () => {
  router.post(
    "/session",
    validate(sessionSchema),
    authController.createSession
  );

  return router;
};

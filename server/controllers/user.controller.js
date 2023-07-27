const cloudinary = require("../utils/cloudinary");

class UserController {
  async createProfile(req, res, next) {
    const { id } = req.params;
    const result = await cloudinary.uploader.upload(req.file.path);
    const { firstName, lastName, username, about } = req.body;
    return res.json(id, firstName, lastName, username, about, result);
  }
}

module.exports = new UserController();

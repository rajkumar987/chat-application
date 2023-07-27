const { UserService } = require("../services/index");
const { isObjectValid } = require("../utils/common");

class AuthController {
  async createSession(req, res, next) {
    const { mobile } = req.body;
    parseInt(mobile);
    const user = await UserService.checkUser(mobile);
    if (!user) {
      const response = await UserService.createUser(mobile);
      return res.json(response);
    } else {
      const valid = isObjectValid(user);
      if (!valid) {
        return res.json({
          message: "user already exists",
          newUser: true,
          data: {
            id: user.id,
          },
        });
      }

      return res.status(400).json({ message: "user already exists" });
    }
  }
}

module.exports = new AuthController();

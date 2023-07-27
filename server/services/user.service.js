const prisma = require("../utils/prisma");

class UserService {
  async checkUser(mobile) {
    return await prisma.user.findUnique({
      where: {
        mobile,
      },
    });
  }

  async createUser(mobile) {
    try {
      const res = await prisma.user.create({
        data: {
          mobile: mobile,
        },
      });
      return {
        status: 200,
        message: "User created successfully",
        newUser: true,
        data: {
          id: res.id,
        },
      };
    } catch (err) {
      console.log({ err });
    }
  }
}

module.exports = new UserService();

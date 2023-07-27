const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json({ success: "app working fine" });
  });

  app.use("/api/v1/user", userRoutes());
  app.use("/api/v1/auth", authRoutes());
};

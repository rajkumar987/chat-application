const express = require("express");
const { PORT } = require("./config");
const expressApp = require("./express-app");

const start_server = async function () {
  const app = express();
  const router = express.Router();

  await expressApp(app, router);

  app
    .listen(PORT || 8080, () => {
      console.log(`Server running on port ${PORT || 8080}`);
    })
    .on("error", (err) => {
      console.log(`Server error: ${err}`);
      process.exit(1);
    });
};

start_server();

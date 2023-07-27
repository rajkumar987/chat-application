const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  const config_file = `./.env.${process.env.NODE_ENV}`;
  dotenv.config({ path: config_file });
} else {
  dotenv.config();
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};

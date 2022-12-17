require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    url: "mongodb://localhost:27017/issbDb",
  },
};

module.exports = dev;

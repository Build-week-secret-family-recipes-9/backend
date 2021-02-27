const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const restrict = require("./auth/restricted-middleware");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");
const recipesRouter = require("./recipes/recipes-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/recipes", restrict, recipesRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;

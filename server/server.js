const path = require("path");
const express = require("express");
const auth = require("./lib/auth");
const crypto = require("./lib/crypto");
const users = require("./lib/users");
const bagRoutes = require("./routes/bag");
const itemRoutes = require("./routes/items");

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../dist")));

function signIn(req, res, next) {
  users
    .getByName(req.body.username)
    .then(user => {
      return user || invalidCredentials(res);
    })
    .then(user => {
      return user && crypto.compare(user.hash, req.body.password);
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res);
    })
    .catch(() => {
      res.status(400).send({
        errorType: "DATABASE_ERROR"
      });
    });
}

function register(req, res, next) {
  users
    .exists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: "User already exists" });
      }
      users.create(req.body.username, req.body.password).then(() => next());
    })
    .catch(err => {
      console.log(err.code);

      res.status(400).send({ message: err.code });
    });
}

function invalidCredentials(res) {
  res.status(400).send({
    errorType: "INVALID_CREDENTIALS"
  });
}

server.use("/api/v1/bags", bagRoutes);
server.use("/api/v1/items", itemRoutes);

server.post("/signin", signIn, auth.issueJwt);

server.post("/register", register, auth.issueJwt);

server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = server;

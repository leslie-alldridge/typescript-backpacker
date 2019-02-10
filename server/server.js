const path = require("path");
const express = require("express");
const auth = require("./lib/auth");
const crypto = require("./lib/crypto");
const users = require("./lib/users");
const bagRoutes = require("./routes/bag");
const itemRoutes = require("./routes/items");
const verifyJwt = require("express-jwt");

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../dist")));

server.post("/signin", signIn, auth.issueJwt);
server.post("/register", register, auth.issueJwt);

function signIn(req, res, next) {
  console.log(req.body.username);

  users
    .getByName(req.body.username)
    .then(user => {
      console.log(user);

      return user || invalidCredentials(res);
    })
    .then(user => {
      console.log(user.hash);
      console.log(req.body.password);

      return new Promise((resolve, reject) => {
        crypto.compare(req.body.password, user.hash, (err, match) => {
          console.log(err);
          console.log(match);
          return resolve(match);
          // if (err) res.status(500).json({ message: err.message });
          // else if (!match)
          //   res.status(400).json({ message: "Password is incorrect" });
          // else {
          //   res.json({
          //     message: "Authentication successful"
          //   });
        });
      });
    })
    .then(isValid => {
      console.log("hit");

      console.log(isValid);

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

function getSecret(req, payload, done) {
  done(null, "test");
}

server.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
);
server.use("/api/v1/bags", bagRoutes);
server.use("/api/v1/items", itemRoutes);

server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = server;

const express = require("express");
const verifyJwt = require("express-jwt");
const auth = require("../lib/auth");
const crypto = require("../lib/crypto");
const users = require("../lib/users");

const bags = require("../lib/bags");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/signin", signIn, auth.issueJwt);

router.post("/register", register, auth.issueJwt);

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
      res.status(400).send({ message: err.message });
    });
}

function invalidCredentials(res) {
  res.status(400).send({
    errorType: "INVALID_CREDENTIALS"
  });
}

function getSecret(req, payload, done) {
  done(null, process.env.JWT_SECRET);
}

router.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
);

router.get("/", (req, res) => {
  bags.getBags().then(data => {
    res.json({
      message: "This is your bag.",
      bag: data
    });
  });
});

router.post("/", (req, res) => {
  bags.addBags(req.body).then(saved => {
    bags.getBags().then(data => {
      res.json({
        message: "This is your bag.",
        bag: data
      });
    });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  bags.deleteBag(id).then(delBag => {
    res.json({
      message: "deleted bag",
      bag: delBag
    });
  });
});

router.post("/update/:id", (req, res) => {
  bags
    .updateBag(
      req.params.id,
      req.body.destination,
      req.body.description,
      "leslie"
    )
    .then(updBag => {
      res.json({
        message: "updated bag",
        bag: updBag
      });
    });
});

module.exports = router;

const express = require("express");
const verifyJwt = require("express-jwt");
const auth = require("../lib/auth");

const bags = require("../lib/bags");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

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

const express = require("express");
const items = require("../lib/items");
const verifyJwt = require("express-jwt");
const auth = require("../lib/auth");

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// function getSecret(req, payload, done) {
//   done(null, process.env.JWT_SECRET);
// }

// router.use(
//   verifyJwt({
//     secret: getSecret
//   }),
//   auth.handleError
// );

router.post("/:id", (req, res) => {
  items.addItem(req.body.user, req.params.id, req.body.input).then(data => {
    res.json({
      message: "These are your bag items.",
      bagItems: data
    });
  });
});

router.get("/:id", (req, res) => {
  items.getItems(req.params.id).then(data => {
    res.json({
      message: "These are your bag items.",
      bagItems: data
    });
  });
});

router.post("/archive/:id", (req, res) => {
  items
    .archiveBagItem(req.body.user, req.params.id, req.body.item)
    .then(data => {
      res.json({
        message: "These are your updated bag items.",
        bagItems: data
      });
    });
});

router.delete("/:id", (req, res) => {
  items.deleteItem(req.body.user, req.body.bagid, req.body.item).then(data => {
    res.json({
      message: "These are your new bag items.",
      bagItems: data
    });
  });
});

module.exports = router;

const express = require("express");
const verifyJwt = require("express-jwt");

const items = require("../lib/items");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/:id", (req, res) => {
  items.addItem("leslie", req.params.id, req.body.input).then(data => {
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
  items.archiveBagItem("leslie", req.params.id, req.body.item).then(data => {
    res.json({
      message: "These are your updated bag items.",
      bagItems: data
    });
  });
});

router.delete("/:id", (req, res) => {
  items.deleteItem("leslie", req.body.bagid, req.body.item).then(data => {
    res.json({
      message: "These are your new bag items.",
      bagItems: data
    });
  });
});

module.exports = router;

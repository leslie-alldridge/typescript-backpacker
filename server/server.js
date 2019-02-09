const path = require("path");
const express = require("express");

const bagRoutes = require("./routes/bag");
const itemRoutes = require("./routes/items");

const server = express();

server.use(express.static(path.join(__dirname, "../dist")));

server.use("/api/v1/bags", bagRoutes);
server.use("/api/v1/items", itemRoutes);

server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

module.exports = server;

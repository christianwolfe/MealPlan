const router = require("express").Router();
const authRoutes = require("./auth");
const apiRoutes = require("./api/reserve");
const path = require("path");

// Routes for authentication
router.use("/auth", authRoutes);

//api routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;

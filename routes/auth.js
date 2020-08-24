const router = require("express").Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");
const apiController = require("../controllers/apiController");

// Routes start with /auth
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/user", auth, authController.getUser);
router.get("/user", apiController.getRes);

module.exports = router;
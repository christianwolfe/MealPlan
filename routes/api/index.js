const router = require("express").Router();
const apiController = require("../../controllers/apiController");

router
  .route("/:id")
  .put(apiController.update);

module.exports = router;

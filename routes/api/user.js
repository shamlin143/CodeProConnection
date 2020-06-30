const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/projects/user"
router.route("/")
  .get(userController.findById)
  .post(userController.create)


// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)

module.exports = router;
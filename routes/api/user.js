const router = require("express").Router();
const booksController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")
  .get(user.findByID)


// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(user.findById)
  .put(userController.update)

module.exports = router;
const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/projects"
router.route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;

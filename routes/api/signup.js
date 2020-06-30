// // OLD CODE
// const router = require("express").Router();
// const userController = require("../../controllers/userController");
// const signup = require("../../client/src/pages/signup")

// // Matches with "/api/books"
// router.route("signup")
// return signup
//   .get(userController.findAll)
//   .post(userController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   // .get(booksController.findById)
//   // .put(booksController.update)
//   // .delete(booksController.remove);

// module.exports = router;


// //new passport code
const router = require("express").Router();
const booksController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")
  .get(user.findByID)


// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(user.findById)
//   .put(userController.update)

// // Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);


module.exports = router;
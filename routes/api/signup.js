// OLD CODE
// const router = require("express").Router();
// // const booksController = require("../../controllers/booksController");
// const signup = require("../../client/src/pages/signup")

// // Matches with "/api/books"
// router.route("signup")
// return
// signup
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   // .get(booksController.findById)
//   // .put(booksController.update)
//   // .delete(booksController.remove);

// module.exports = router;



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
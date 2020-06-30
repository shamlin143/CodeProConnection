const router = require("express").Router();
const projectRoutes = require('./projects');
const userRoutes = require('./user');

// User routes
router.use("/projects", projectRoutes);
router.use('/users', userRoutes);
module.exports = router;

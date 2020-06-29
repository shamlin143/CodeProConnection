const router = require("express").Router();
const projectRoutes = require('./projects');

// User routes
router.use("/projects", projectRoutes);

module.exports = router;

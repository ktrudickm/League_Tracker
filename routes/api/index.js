const router = require("express").Router();
const playerRoutes = require("./playerRoutes");
const teamRoutes = require("./teamRoutes");
const loginRoutes = require("./loginRoutes");

router.use("/players", playerRoutes);
router.use("/teams", teamRoutes);
router.use('/login', loginRoutes);

module.exports = router;

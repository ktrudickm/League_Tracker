const router = require("express").Router();
const playerRoutes = require("./playerRoutes");
const teamRoutes = require("./teamRoutes");
const loginRoutes = require("./loginRoutes");
const leagueRoutes = require('./leagueRoutes');

router.use("/players", playerRoutes);
router.use("/teams", teamRoutes);
router.use('/leagues', leagueRoutes);
router.use('/user', loginRoutes);

module.exports = router;

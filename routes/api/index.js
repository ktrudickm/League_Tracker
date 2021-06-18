const router = require('express').Router();
const playerRoutes = require('./playerRoutes');

router.use('/players', playerRoutes);

module.exports = router;
const router = require('express').Router();
const { Player } = require('../../models');
const bcrypt = require('bcrypt');

router.post('/', async(req, res) => {
    try {
        const loginData = await Player.findOne({email: req.body.email});
        req.body.password = await bcrypt.hash(req.body.password, 10);
        if(loginData.password === req.body.password) {
            res.status(200).json(loginData);
        } else {
            res.status(404).json({message: "That login did not match any user in our system, try again..."});
        }
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

module.exports = router;
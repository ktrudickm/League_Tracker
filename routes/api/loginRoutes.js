const router = require('express').Router();
const { Player } = require('../../models');
const bcrypt = require('bcrypt');

router.post('/', async(req, res) => {
    try {
        const loginData = await Player.findOne({email: req.body.email});
        // req.body.password = await bcrypt.hash(req.body.password, 10);
        if(loginData.password === req.body.password) {
            req.session.save(() => {
                req.session.username = loginData.username;
                req.session.logged_in = true;
                req.session.isAdmin = loginData.isAdmin;
                req.session.image = loginData.image;

                res.status(200).json(loginData);
            });
        } else {
            res.status(404).json({message: "That login did not match any user in our system, try again..."});
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({message: "An ERROR occurred when logging in"});
    }
});

router.post('/create', async ({ body }, res) => {
    try {
        const signupData = await Player.create(body);

        req.session.save(() => {
            req.session.username = signupData.username;
            req.session.logged_in = true;
            req.session.isAdmin = loginData.isAdmin;
            req.session.image = loginData.image;

            res.status(200).json(signupData);
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "An ERROR occured when signing up"});
    }
});

router.post('/logout', (req, res) => {
    if(req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
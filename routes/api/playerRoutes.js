const router = require('express').Router();
const { Player } = require('../../models');

router.get('/:id', (req, res) => {
    Player.findById({_id: req.params.id})
        .then(dbPlayer => {
            res.status(200).json(dbPlayer);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        });
});

module.exports = router;
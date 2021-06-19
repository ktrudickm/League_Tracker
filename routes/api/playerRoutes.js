const router = require('express').Router();
const { Player, Team } = require('../../models');

// Fetches single player data
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

// Fetches all players from team
router.get('/byteam/:teamid', (req, res) => {
    try {
        const players = Player.find({team_key: req.params.teamid});
        if(!players) res.status(404).json({message: "No players on such team"});
        res.status(200).json(players);
    } catch(err) {
        res.status(400).json(err);
    }
});

// Creates new player
router.post('/add', ({body}, res) => {
    Player.create(body)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        });
});

module.exports = router;
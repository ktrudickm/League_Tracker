const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Player } = require('../../models');
const withAuth = require('../../scripts/withAuth');
const withPlayerAuth = require('../../scripts/withPlayerAuth');

// Fetches players by either username first name last name
router.get('/:str', async (req, res) => {
    try {
        const str = req.params.str;
        let players = await Player.find({first_name: str}, '-password -isAdmin -phone -email').exec();
        if(players.length === 0) {
            players = await Player.find({last_name: str}, '-password -isAdmin -phone -email').exec();
        }
        if(players.length === 0) {
            players = await Player.find({username: str}, '-password -isAdmin -phone -email').exec();
        }
        res.status(200).json(players);
    } catch (err) {
        console.err(err);
        res.status(400).json(err);
    }
    if (players.length === 0) {
      players = await Player.find({ username: str }).exec();
    }
    res.status(200).json(players);
  } catch (err) {
    console.err(err);
    res.status(400).json(err);
  }
});

// Fetches single player data
router.get('/id/:id', async (req, res) => {
    try {
        const dbPlayer = await Player.findById({_id: req.params.id}, '-password -isAdmin -phone -email')
        res.status(200).json(dbPlayer);
    } catch(err) {
        console.error(err);
        res.status(500).json({message: "ERROR when searching for player by id"});
    }
});

// Fetches all players from team
router.get('/byteam/:teamid', async (req, res) => {
    try {
        const players = await Player.find({team_key: Number.parseInt(req.params.teamid)}, '-password -isAdmin -phone -email');
        if(!players) res.status(404).json({message: "No players on such team"});
        res.status(200).json(players);
    } catch(err) {
        console.error(err);
        res.status(400).json({message: "ERROR when searching for players by team key"});
    }
});

// User Profile page api route MUST BE LOGGED IN TO USE
// Fetches single player data
router.get('/user/profile/:id', withPlayerAuth, async (req, res) => {
    try {
        const dbPlayer = await Player.findById({_id: req.params.id}, '-isAdmin')
        res.status(200).json(dbPlayer);
    } catch(err) {
        console.error(err);
        res.status(500).json({message: "ERROR when searching for player by id"});
    }
});

// Update User Profile page route MUST BE LOGGED IN
// Updates single user
router.put('/user/profile/update/:id', withPlayerAuth, async (req, res) => {
    try {
        const {params: {id}, body } = req;
        const hashedPassword = await bcrypt.hash(body.password, 10);
        const playerData = await Player.findOneAndUpdate({ _id: id }, { 
            email: body.email,
            password: hashedPassword,
            phone: body.phone,
            image: body.image,
         }, {new: true});
         res.status(200).json(playerData);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "There was an ERROR when updating the player" });
    }
});

// Admin access only
router.put('/update/:id', withAuth, async(req, res) => {
    try {
        const {params: {id}, body } = req;
        const playerData = await Player.findOneAndReplace({ _id: id }, {
            first_name: body.first_name, 
            last_name: body.last_name,
            username: body.username,
            email: body.email,
            password: body.password,
            date_of_birth: body.date_of_birth,
            phone: body.phone,
            image: body.image,
            position: body.position,
            jersey: body.jersey,
            team_key: body.team_key,
            stats: body.stats,
            isAdmin: body.isAdmin 
        }, {new: true});
        res.status(200).json(playerData);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "There was an ERROR when updating the player" });
    }
});

module.exports = router;

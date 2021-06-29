const router = require("express").Router();
const { Player } = require("../../models");

// Fetches players by either username first name last name
router.get("/:str", async (req, res) => {
  try {
    const str = req.params.str;
    let players = await Player.find({ first_name: str }).exec();
    if (players.length === 0) {
      players = await Player.find({ last_name: str }).exec();
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
router.get("/id/:id", (req, res) => {
  Player.findById({ _id: req.params.id })
    .then((dbPlayer) => {
      res.status(200).json(dbPlayer);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// Fetches all players from team
router.get("/byteam/:teamid", (req, res) => {
  try {
    const players = Player.find({ team_key: req.params.teamid });
    if (!players) res.status(404).json({ message: "No players on such team" });
    res.status(200).json(players);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a player's image by username
router.put("/update/image/:username", async (req, res) => {
  try {
    const updInfo = await Player.findOneAndUpdate(
      { username: req.params.username },
      { image: req.body.imageURL },
      { new: true }
    );
    if (!updInfo)
      res.status(404).json({ message: "No player found with that username" });
    res.status(200).json(updInfo);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/update/data/:username", async (req, res) => {
  try {
    const updInfo = await Player.findOneAndUpdate(
      { username: req.params.username },
      req.body,
      { new: true }
    );
    if (!updInfo)
      res.status(404).json({ message: "No player found with that username" });
    res.status(200).json(updInfo);
  } catch (err) {
    res.status(400).json(err);
  }
});
// Creates new player
// router.post('/add', ({body}, res) => {
//     console.log(body);
//     Player.create(body)
//         .then(data => {
//             res.status(200).json(data);
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router;

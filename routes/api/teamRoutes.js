const router = require("express").Router();
const { Team } = require("../../models");

// Fetches all teams from a particular league
router.get("/byteam/:leagueid", (req, res) => {
  try {
    const teams = Team.find({ league_key: req.params.leagueid });
    if (!teams)
      res.status(404).json({ message: "No teams found in this league" });
    res.status(200).json(teams);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/search/:str", async (req, res) => {
  try {
    const str = req.params.str;
    let team = await Team.find({ name: str }).exec();
    if (team.length === 0) {
      team = "No teams found";
    }
    res.status(200).json(team);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An Error occurred" });
  }
});

// Fetches single team by id
router.get("/:id", (req, res) => {
  Team.findById({ _id: req.params.id })
    .then((dbTeam) => {
      res.status(200).json(dbTeam);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// Create a new team
router.post("/add", ({ body }, res) => {
  Team.create(body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;

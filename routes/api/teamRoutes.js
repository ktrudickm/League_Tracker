const router = require("express").Router();
const { Team } = require("../../models");
const withAuth = require('../../scripts/withAuth');

// Fetches all teams
router.get("/allTeams", async (req, res) => {
  try {
    const teams = await Team.find();
    if (!teams)
      res.status(404).json({ message: "No teams found in this league" });
    res.status(200).json(teams);
  } catch (err) {
    res.status(400).json({ message: "An ERROR occurred when fetching all teams" });
  }
});

// Fetches all teams from a particular league
router.get("/byteam/:leagueid", async (req, res) => {
  try {
    const teams = await Team.find({ league_key: req.params.leagueid });
    if (!teams)
      res.status(404).json({ message: "No teams found in this league" });
    res.status(200).json(teams);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "An ERROR occurred when fetching teams by league id" });
  }
});

// Search teams by string
router.get("/search/:str", async (req, res) => {
  try {
    const str = req.params.str;
    let team = await Team.find({ name: {$regex: str, $options: 'i'} }).exec();
    if (team.length === 0) {
      team = "No teams found";
      res.status(404).json({message: team});
    }
    res.status(200).json(team);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An Error occurred" });
  }
});

// Fetches single team by id
router.get("/:id", async (req, res) => {
  try {
    const teamData = await Team.findById({ _id: req.params.id })
    res.status(200).json(teamData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An ERROR occurred when attempting to add team" });
  }
});

// Admin Access Only
// Create a new team
router.post("/add", withAuth, async ({ body }, res) => {
  try {
      const teamData = await Team.create(body);
      res.status(200).json(teamData);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "An ERROR occurred when attempting to add team" });
  }
});

module.exports = router;

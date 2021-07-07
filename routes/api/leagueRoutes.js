const router = require("express").Router();
const { League } = require("../../models");
const withAuth = require("../../scripts/withAuth");

// Find league by league name search
router.get("/search/:str", async (req, res) => {
  try {
    const str = req.params.str;
    let league = await League.find({
      name: { $regex: str, $options: "i" },
    }).exec();
    res.status(200).json(league);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    let leagues = await League.find({}).exec();
    res.status(200).json(leagues);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Finds League by id
router.get("/:id", async (req, res) => {
  try {
    const dbLeague = League.findById({ _id: req.params.id });
    res.status(200).json(dbLeague);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "ERROR when fetching league by id" });
  }
});

// Admin Access Only
// Creates a new league
router.post("/add", withAuth, async ({ body }, res) => {
  try {
    const leagueData = League.create(body);
    res.status(200).json(leagueData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "ERROR when creating league" });
  }
});

module.exports = router;

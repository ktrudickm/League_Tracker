const router = require("express").Router();
const { League } = require("../../models");
const withAuth = require('../../scripts/withAuth');

// Find league by league name search
router.get("/:str", async (req, res) => {
  try {
    const str = req.params.str;
    let league = await League.find({ name: str }).exec();
    res.status(200).json(league);
  } catch (err) {
    console.err(err);
    res.status(400).json(err);
  }
});

// Finds League by id
router.get("/:id", (req, res) => {
  League.findById({ _id: req.params.id })
    .then((dbLeague) => {
      res.status(200).json(dbLeague);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// Creates a new league
router.post("/add", withAuth, ({ body }, res) => {
  League.create(body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;

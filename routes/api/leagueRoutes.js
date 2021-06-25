const router = require("express").Router();
const { League } = require("../../models");

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
router.post("/add", ({ body }, res) => {
  Leaue.create(body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;


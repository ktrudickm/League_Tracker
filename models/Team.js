const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  stats: {
    championships: {
      type: Number,
      default: 0,
    },
    madePlayoffs: {
      type: Boolean,
    },
    rank: {
      type: Number,
    },
    wins: {
      type: Number,
      default: 0,
    },
    losses: {
      type: Number,
      default: 0,
    },
    draws: {
      type: Number,
      default: 0,
    },
    gamesPlayed: {
      type: Number,
      default: 0,
    },
    goalsScored: {
      type: Number,
      default: 0,
    },
    goalsAgainst: {
      type: Number,
      default: 0,
    },
  },
  league_key: {
<<<<<<< HEAD
    type: Schema.Types.ObjectId,
    ref: "League",
=======
    type: Number
>>>>>>> 6ee6c2920565d6f40789d27dd52f71f2ed9107ff
  },
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;

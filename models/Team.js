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
    type: Number,
  },
  key: {
    type: Number,
  }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;

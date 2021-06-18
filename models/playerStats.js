const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerStatsSchema = new Schema({
    goals: {
        type: Number,
        default: 0,
    },
    assists: {
        type: Number,
        default: 0
    },
    games_played: {
        type: Number,
        default: 0
    },
    yellow_cards: {
        type: Number,
        default: 0
    },
    red_cards: {
        type: Number,
        default: 0
    },
    goals_per_game: {
        type: Number,
        default: 0
    }
});

const playerStats = mongoose.model("playerStats", playerStatsSchema);

module.exports = playerStats;
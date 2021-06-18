const mongoose = require('mongoose');
// const playerStats = require('./playerStats');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: "Enter a name for Player"
    },
    last_name: {
        type: String,
        trim: true,
        required: "Enter a last name for Player"
    },
    username: {
        type: String,
        trim: true,
        required: "Enter a username for player"
    },
    email: {
        type: String,
        trim: true,
        required: "Enter a email for player"
    },
    password: {
        type: String,
        trim: true,
        required: "Enter a password for player"
    },
    date_of_birth: {
        type: Date,
        default: Date.now(),
        required: "Enter a date of birth for the player"
    },
    phone: {
        type: String,
        trim: true,
        required: "Enter a phone number for the player"
    },
    image: {
        type: String
    },
    position: {
        type: String,
        trim: true,
        required: "Enter a position for the player"
    },
    jersey: {
        type: Number,
        required: "Enter a jersey number for the player"
    },
    team_key: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    stats: {
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
    }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
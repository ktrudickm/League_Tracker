const mongoose = require('mongoose');
// const playerStats = require('./playerStats');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: "enter a first name"
    },
    last_name: {
        type: String,
        trim: true,
        required: "enter a last name"    
    },
    username: {
        type: String,
        trim: true,
        required: "Enter username"    
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        // required: true    
    },
    password: {
        type: String,
        trim: true,
        required: "Enter password"    
    },
    date_of_birth: {
        type: Date,
        default: Date.now(),
        // required: true
    },
    phone: {
        type: String,
        trim: true,
        // required: true
    },
    image: {
        type: String
    },
    position: {
        type: String,
        trim: true,
        // required: true
    },
    jersey: {
        type: Number,
        // required: true
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
    },
    isAdmin: {
        type: Boolean,
        default: false,
        // required: true
    },
    team_key: {
        type: String
    }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
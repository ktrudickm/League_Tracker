const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name:{
        type: String,
    },
    image:{
        type: String,
    },
    stats:{
        type: Number,
    },
    league_key: [{
        type: Schema.Types.ObjectId,
        ref: 'League'
    }]
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
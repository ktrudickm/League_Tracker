const mongoose = require("mongoose");
const leagues = mongoose.Schema;

const leaguesSchema = new Leagues({
    name:{
        type:String,
    },
    image:{
        type: String,
    },
});


const teamsSchema = new Leagues({
    name:{
        type: String,
    },
    image:{
        type: String,
    },
    stats:{
        type: Number,
    },
    league: [{
        type: Schema.Types.ObjectId,
        ref: 'leaguesSchema'
    }]
});


const playerSchema = new mongoose.Schema({
  firstname:{
      type: String,
  },

  lastname:{
      type: String,
  },

  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  dateofbirth:{
      type: Number,
  },

  phone:{
      type: Number,
  },

  image:{
      type: String,
  },

  position:{
      type: String,
  },

  jersey:{
      type: Number,
  },

  playerCreated: {
    type: Date,
    default: Date.now
  },
  team: [{
    type: Schema.Types.ObjectId,
    ref: 'teamsSchema'
}]
});


const leagues = mongoose.model("Leagues", leaguesSchema);
const Teams = mongoose.model("Teams", teamsSchema);
const Player = mongoose.model("Player", playerSchema);

module.exports = leagues;
module.exports = Teams;
module.exports = Player;
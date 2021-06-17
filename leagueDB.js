const mongoose = require("mongoose");
const leagues = mongoose.Schema;

const leaguesSchema = new Leagues({
    id:{
        type: String,    
    },
    name:{
        type:String,
    },
    image:{
        type: "URL",
    },
});


const teamsSchema = new Leagues({
    id:{
        type: String,    
    },
    name:{
        type:String,
    },
    image:{
        type: "URL",
    },
    leaguekey:{
        type:String,
    },
    stats:{
        type: Number,
    },
});


const playerSchema = new mongoose.Schema({
  id: {
    type: String,
  },
   
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
      type: "URL",
  },

  position:{
      type: String,
  },

  jersey:{
      type: Number,
  },

  teamkey:{
      type:String,
  },

  playerCreated: {
    type: Date,
    default: Date.now
  }
});


const leagues = mongoose.model("Leagues", leaguesSchema);
const Teams = mongoose.model("Teams", teamsSchemaa);
const Player = mongoose.model("Player", playerSchema);

module.exports = leagues;
module.exports = Teams;
module.exports = Player;
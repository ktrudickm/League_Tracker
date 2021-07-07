const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const leagueSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  key: {
    type: Number,
    unique: true,
  },
});

const League = mongoose.model("League", leagueSchema);

module.exports = League;

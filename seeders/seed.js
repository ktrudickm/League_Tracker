const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/leagueDB", {
  useNewUrlParser: true
});

const playerSeed = {

}

const leagueSeed = {

}

const teamSeed = {

}

const statSeed = {

}



db.Player.deleteMany({})
.then(() => db.Player.collection.insertMany(playerSeed))
.then(data => {
  console.log(data.result.n + " player records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

db.League.deleteMany({})
.then(() => db.League.collection.insertMany(leagueSeed))
.then(data => {
  console.log(data.result.n + " league records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

db.Team.deleteMany({})
.then(() => db.Team.collection.insertMany(teamSeed))
.then(data => {
  console.log(data.result.n + " team records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

db.playerStats.deleteMany({})
.then(() => db.playerStats.collection.insertMany(statSeed))
.then(data => {
  console.log(data.result.n + " player stats records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
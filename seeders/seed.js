const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/leagueDB", {
  useNewUrlParser: true
});

const playerSeed = [
    {
        first_name: 'Keon',
        last_name: 'Pourboghrat',
        username: 'kpour',
        email:  'keon@gmail.com',
        password: 'HASH',
        date_of_birth: new Date(''),
        phone: '3309998888',
        image: '',
        position: '',
        jersey: '',
        team_key: '2',
        stats: '',
    },
    {
        first_name: 'Kendall',
        last_name: 'Trudick',
        username: 'ktrudick',
        email:  'kendall@gmail.com',
        password: 'HASH',
        date_of_birth: new Date(''),
        phone: '3309998888',
        image: '',
        position: 'Forward',
        jersey: '35',
        team_key: '2',
        stats: '',
    },
    {
        first_name: 'Kevin',
        last_name: 'Smith',
        username: 'ksmith',
        email:  'kevin@gmail.com',
        password: 'HASH',
        date_of_birth: new Date(''),
        phone: '3309998888',
        image: '',
        position: 'Defender',
        jersey: '20',
        team_key: '2',
        stats: '',
    },
    {
        first_name: 'Kelly',
        last_name: 'Baskin',
        username: 'kellyb',
        email:  'kelly@gmail.com',
        password: 'HASH',
        date_of_birth: new Date(''),
        phone: '3309998888',
        image: '',
        position: 'Midfield',
        jersey: '12',
        team_key: '2',
        stats: '',
    },
    {
        first_name: 'Christiano',
        last_name: 'Ronaldo',
        username: 'ronaldo',
        email:  'ronaldo@gmail.com',
        password: 'HASH',
        date_of_birth: new Date(''),
        phone: '3309998888',
        image: '',
        position: 'Midfield',
        jersey: '7',
        team_key: '2',
        stats: '',
    },
    {
        first_name: 'Mitch',
        last_name: 'Trout',
        username: 'mitchT',
        email:  'mitch@gmail.com',
        password: 'HASH',
        date_of_birth: new Date(''),
        phone: '3309998888',
        image: '',
        position: 'Goalkeeper',
        jersey: '10',
        team_key: '2',
        stats: '',
    },
    {
        first_name: 'Sydney',
        last_name: 'Riddle',
        username: 'sydrid',
        email:  'sydney@gmail.com',
        password: 'HASH',
        date_of_birth: new Date(''),
        phone: '3309998888',
        image: '',
        position: 'Midfield',
        jersey: '18',
        team_key: '2',
        stats: '',
    },
    {
        first_name: 'Ben',
        last_name: 'Keller',
        username: 'benkell',
        email:  'ben@gmail.com',
        password: 'HASH',
        date_of_birth: new Date(''),
        phone: '3309998888',
        image: '',
        position: 'Defense',
        jersey: '8',
        team_key: '2',
        stats: '',
    },
    {
        first_name: 'Gabby',
        last_name: 'Semar',
        username: 'gabbysem',
        email:  'gabby@gmail.com',
        password: 'HASH',
        date_of_birth: new Date(''),
        phone: '3309998888',
        image: '',
        position: 'Foreward',
        jersey: '24',
        team_key: '2',
        stats: '',
    },
    {
        first_name: 'Andrew',
        last_name: 'Water',
        username: 'awater',
        email:  'andrew@gmail.com',
        password: 'HASH',
        date_of_birth: new Date(''),
        phone: '3309998888',
        image: '',
        position: 'Midfield',
        jersey: '2',
        team_key: '2',
        stats: '',
    },
    {
        first_name: 'Avery',
        last_name: 'Smith',
        username: 'avery',
        email:  'avery@gmail.com',
        password: 'HASH',
        date_of_birth: new Date(''),
        phone: '3309998888',
        image: '',
        position: 'Defender',
        jersey: '9',
        team_key: '2',
        stats: '',
    }
]

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
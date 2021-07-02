const mongoose = require("mongoose");
const db = require("../models");
const bcrypt = require('bcrypt');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/leagueDB", {
  useNewUrlParser: true,
});

let playerSeed = [];

const createDBData = async () => {
  const playerPassword = await bcrypt.hash("HASH", 10);
  const adminPassword = await bcrypt.hash("password", 10);
  console.log(playerPassword);
  playerSeed = [
  {
    first_name: "Admin",
    last_name: "Admin",
    username: "admin",
    email: "admin@leaguetracker.com",
    password: adminPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Goalkeeper",
    jersey: "0",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: true,
  },
  {
    first_name: "Manuel",
    last_name: "Neuer",
    username: "MNeuer",
    email: "MNeuer@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Goalkeeper",
    jersey: "0",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Antonio",
    last_name: "Rudiger",
    username: "ARudiger",
    email: "Arudiger@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Defender",
    jersey: "2",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Marcel",
    last_name: "Halstenberg",
    username: "MHalstenberg",
    email: "MHalstenberg@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Defender",
    jersey: "3",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Matthias",
    last_name: "Ginter",
    username: "Mginter",
    email: "Mginter@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Defender",
    jersey: "4",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Mats",
    last_name: "Hummels",
    username: "MHummels",
    email: "MHummels@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Defender",
    jersey: "5",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Joshua",
    last_name: "Kimmich",
    username: "JKimmich",
    email: "Jkimmich@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Midfield",
    jersey: "6",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Toni",
    last_name: "Kroos",
    username: "Tkroos",
    email: "TKroos@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Midfield",
    jersey: "8",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Serge",
    last_name: "Gnabry",
    username: "SGnabry",
    email: "SGnabry@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Midfield",
    jersey: "10",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Kai",
    last_name: "Havertz",
    username: "KHavertz",
    email: "KHavertz@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Forward",
    jersey: "7",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Kevin",
    last_name: "Volland",
    username: "KVolland",
    email: "KVolland@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Forward",
    jersey: "9",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Timo",
    last_name: "Werner",
    username: "TWerner",
    email: "Twerner@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "5555555",
    image: "https://picsum.photos/200",
    position: "Forward",
    jersey: "11",
    team_key: 1,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Keon",
    last_name: "Pourboghrat",
    username: "kpour",
    email: "keon@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "3309998888",
    image: "https://picsum.photos/200",
    position: "Forward",
    jersey: "13",
    team_key: 2,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Kendall",
    last_name: "Trudick",
    username: "ktrudick",
    email: "kendall@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "3309998888",
    image: "https://picsum.photos/200",
    position: "Forward",
    jersey: "35",
    team_key: 2,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Kevin",
    last_name: "Smith",
    username: "ksmith",
    email: "kevin@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "3309998888",
    image: "https://picsum.photos/200",
    position: "Forward",
    jersey: "20",
    team_key: 2,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Kelly",
    last_name: "Baskin",
    username: "kellyb",
    email: "kelly@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "3309998888",
    image: "https://picsum.photos/200",
    position: "Midfield",
    jersey: "12",
    team_key: 2,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Christiano",
    last_name: "Ronaldo",
    username: "ronaldo",
    email: "ronaldo@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "3309998888",
    image: "https://picsum.photos/200",
    position: "Midfield",
    jersey: "7",
    team_key: 2,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Mitch",
    last_name: "Trout",
    username: "mitchT",
    email: "mitch@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "3309998888",
    image: "https://picsum.photos/200",
    position: "Goalkeeper",
    jersey: "10",
    team_key: 2,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Sydney",
    last_name: "Riddle",
    username: "sydrid",
    email: "sydney@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "3309998888",
    image: "https://picsum.photos/200",
    position: "Midfield",
    jersey: "18",
    team_key: 2,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Ben",
    last_name: "Keller",
    username: "benkell",
    email: "ben@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "3309998888",
    image: "https://picsum.photos/200",
    position: "Defender",
    jersey: "8",
    team_key: 2,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Gabby",
    last_name: "Semar",
    username: "gabbysem",
    email: "gabby@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "3309998888",
    image: "https://picsum.photos/200",
    position: "Defender",
    jersey: "24",
    team_key: 2,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Andrew",
    last_name: "Water",
    username: "awater",
    email: "andrew@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "3309998888",
    image: "https://picsum.photos/200",
    position: "Defender",
    jersey: "2",
    team_key: 2,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
  {
    first_name: "Avery",
    last_name: "Smith",
    username: "avery",
    email: "avery@gmail.com",
    password: playerPassword,
    date_of_birth: new Date(""),
    phone: "3309998888",
    image: "https://picsum.photos/200",
    position: "Defender",
    jersey: "9",
    team_key: 2,
    stats: {
      goals: 0,
      assists: 0,
      games_played: 0,
      yellow_cards: 0,
      red_cards: 0,
      goals_per_game: 0
    },
    isAdmin: false,
  },
];


const leagueSeed = [
  {
    name: "Keon P",
    image: "https://placekitten.com/300/300",
  },
  {
    name: "Max Green",
    image: "https://placekitten.com/300/300",
  },
  {
    name: "Sam Maxwell",
    image: "https://placekitten.com/300/300",
  },
  {
    name: "John D",
    image: "https://placekitten.com/300/300",
  },
  {
    name: "Mark Wight",
    image: "https://placekitten.com/300/300",
  },
];

const teamSeed = [
  {
    name: "Red Team",
    image: "https://picsum.photos/200",
    stats: [
      {
        championships: 3,
        madePlayoffs: false,
        rank: 2,
        wins: 0,
        losses: 1,
        draws: 1,
        gamesPlayed: 2,
        goalsScored: 1,
        goalsAgainst: 2,
      },
    ],
    league_key: 1,
    key: 1,
  },
  {
    name: "Blue Team",
    image: "https://picsum.photos/200",
    stats: [
      {
        championships: 3,
        madePlayoffs: false,
        rank: 2,
        wins: 0,
        losses: 1,
        draws: 1,
        gamesPlayed: 2,
        goalsScored: 1,
        goalsAgainst: 2,
      },
    ],
    league_key: 2,
    key: 2,
  },
  {
    name: "Yellow Team",
    image: "https://picsum.photos/200",
    stats: [
      {
        championships: 3,
        madePlayoffs: false,
        rank: 2,
        wins: 0,
        losses: 1,
        draws: 1,
        gamesPlayed: 2,
        goalsScored: 1,
        goalsAgainst: 2,
      },
    ],
    league_key: 3,
    key: 3,
  },
];

db.Player.deleteMany({})
  .then(() => db.Player.collection.insertMany(playerSeed))
  .then((data) => {
    console.log(data.result.n + " player records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.League.deleteMany({})
  .then(() => db.League.collection.insertMany(leagueSeed))
  .then((data) => {
    console.log(data.result.n + " league records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Team.deleteMany({})
  .then(() => db.Team.collection.insertMany(teamSeed))
  .then((data) => {
    console.log(data.result.n + " team records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
});

}

createDBData();


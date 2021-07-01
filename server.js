const express = require("express");
const session = require('express-session');
const compression = require('compression');
const MongoStore = require('connect-mongo');

const mongoose = require("mongoose");
const routes = require('./routes');
const logger = require("morgan");
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'foo',
  saveUninitialized: false,
  resave: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/leagueDB' })
}));

app.use(logger("dev"));

// app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/leagueDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

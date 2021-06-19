const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/leagueDB", {
  useNewUrlParser: true,
});

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

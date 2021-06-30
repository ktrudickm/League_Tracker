import axios from "axios";

export default {
  // Gets all teams by league
  getTeams: function () {
    return axios.get("/api/teams/allTeams");
  },

  // Gets all teams by league
  getTeamsByLeague: function (leagueid) {
    return axios.get("/api/teams/byteam/" + leagueid);
  },

  // Get a specific user's information
  getSingleUserData: function (id) {
    return axios.get("/api/players/id" + id);
  },

  searchForUsers: function (str) {
    return axios.get("/api/players/" + str);
  },

  searchUsersByTeam: function (teamKey) {
    return axios.get("/api/players/byteam/" + teamKey);
  },

  updatePlayerImage: function (username, imageURL) {
    console.log(imageURL);
    return axios.put(`/api/players/update/image/${username}`, imageURL);
  },

  updatePlayerData: function (username, data) {
    return axios.put(`/api/players/update/data/${username}`, data);
  },

  // Adding a new player to player database
  savePlayer: function(playerData) {
    return axios.post("/api/players", playerData);
  }
};

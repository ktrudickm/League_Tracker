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
  getUserData: function (id) {
    return axios.get(`/api/players/id/${id}`);
  },

  updatePlayerImage: function (username, imageURL) {
    console.log(imageURL);
    return axios.put(`/api/players/update/image/${username}`, imageURL);
  },

  updatePlayerData: function (username, data) {
    return axios.put(`/api/players/update/data/${username}`, data);
  },
};

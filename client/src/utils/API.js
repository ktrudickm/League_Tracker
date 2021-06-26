import axios from "axios";

export default {
  // Gets all teams by league
  getTeams: function() {
    return axios.get("/api/teams/allTeams");
  },

  // Gets all teams by league
  getTeamsByLeague: function(leagueid) {
    return axios.get("/api/teams/byteam/" + leagueid);
  },

  // Get a specific user's information
  getUserData: function () {
    return axios.get("/api/players/:id");
  },

  addUserImage: function () {
    return axios.post("/api/user/image");
  },
};

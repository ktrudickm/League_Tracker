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
  getSingleUserData: function (id) {
    return axios.get("/api/players/id" + id);
  },

  searchForUsers: function (str) {
    return axios.get("/api/players/" + str);
  },

  searchUsersByTeam: function (teamKey) {
    return axios.get("/api/players/byteam/" + teamKey);
  },

  addUserImage: function () {
    return axios.post("/api/user/image");
  },
};

import axios from "axios";

export default {
  // Gets all teams by league
  getTeamsByLeague: function () {
    return axios.get("/api/byteam/:leagueid");
  },

  // Get a specific user's information
  getUserData: function (username) {
    return axios.get("/api/players/" + username);
  },

  addUserImage: function () {
    return axios.post("/api/user/image");
  },
};

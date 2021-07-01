/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
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
    return axios.get(`/api/players/user/profile/${id}`);
  },

  // Search for player by username, firstname, lastname
  searchForUsers: function (str) {
    return axios.get("/api/players/" + str);
  },

  // search for all users based on team key
  searchUsersByTeam: function (teamKey) {
    return axios.get("/api/players/byteam/" + teamKey);
  },

  // change players avatar image
  updatePlayerImage: function (id, imageURL) {
    console.log(imageURL);
    return axios.put(`/api/players/user/profile/change/image/${id}`, imageURL);
  },

  // change players password
  updatePlayerPassword: function (id, password) {
    return axios.put(
      `/api/players/user/profile/change/password/${id}`,
      password
    );
  },

  // Updates user info for logged-in user ONLY
  updateUserInfo: function (id, field, data) {
    return axios.put(`api/players/user/profile/update/${id}`, field, data);
  },

  // Admin update all player properties route
  adminUpdatePlayer: function (id, player) {
    return axios.put(`/api/players/update/${id}`, player);
  },

  // Admin update players team_key (which team they are on)
  adminUpdatePlayerTeam: function (id, team_key) {
    return axios.put(`/api/players/update/player/team/${id}`, team_key);
  },

  // Admin update players stats
  adminUpdatePlayerStats: function (id, stats) {
    return axios.put(`/api/players/update/player/stats/${id}`, stats);
  },

  // login
  loginPlayer: function (player) {
    return axios.post(`/api/user/login`, player);
  },

  // logout
  logoutPlayer: function () {
    return axios.post(`/api/user/logout`);
  },

  // signup
  signupPlayer: function (player) {
    return axios.post(`/api/user/create`, player);
  },
};

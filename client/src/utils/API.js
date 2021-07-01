/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

  // ****************************************  NOT LOGGED IN  **************************************

  // ** League Routes **

  // Gets leagues by string
  getLeaguesByStr: function (str) {
    return axios.get(`/api/leagues/search/${str}`);
  },

  getLeagueById: function (id) {
    return axios.get(`/api/leagues/${id}`);
  },

  // ** Teams Route **

  // Gets all teams by league
  getTeams: function () {
    return axios.get("/api/teams/allTeams");
  },

  // Gets all teams by league
  getTeamsByLeague: function (leagueid) {
    return axios.get("/api/teams/byteam/" + leagueid);
  },

  getTeamsByStr: function (str) {
    return axios.get(`/api/teams/search/${str}`);
  },

  getTeamById: function (id) {
    return axios.get(`/api/teams/${id}`);
  },

  // ** Players Route **

  // Get a specific user's information
  getSingleUserData: function (id) {
    return axios.get(`/api/players/id/${id}`);
  },

  // Search for player by username, firstname, lastname
  searchForUsers: function (str) {
    return axios.get("/api/players/" + str);
  },

  // search for all users based on team key
  searchUsersByTeam: function (teamKey) {
    return axios.get("/api/players/byteam/" + teamKey);
  },

  // ************************************   MUST BE LOGGED IN ***************************************

  // Grabs the logged in users data from mongodb
  getLoggedInUser: function(id) {
    return axios.get(`/api/players/user/profile/${id}`);
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

  // updates all player information
  updatePlayer: function (id, player) {
    return axios.put(`/api/players/user/profile/${id}`, player);
  },

  // *******************************************  ADMIN ACCESS ONLY  *************************************

  // ** League Routes **

  // Admin add league to db
  adminAddLeague: function (league) {
    return axios.post(`/api/leagues/add`, league);
  },

  // ** Teams Routes **

  // Admins add team to db
  adminAddTeam: function (team) {
    return axios.post(`/api/teams/add`, team);
  },

  // ** Player Routes **

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

  // *********************************************  LOGIN ROUTES  ******************************************

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

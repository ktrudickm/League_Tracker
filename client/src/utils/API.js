import axios from "axios";

export default {
    // Gets all teams by league
    getTeamsByLeague: function() {
      return axios.get("/api/byteam/:leagueid");
    },
   
  };
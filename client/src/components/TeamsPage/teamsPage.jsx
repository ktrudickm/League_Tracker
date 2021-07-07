import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import API from "../../utils/API";

const Teams = (props) => {
  // Setting our component's initial state
  const [teams, setteams] = useState([]);
  const leagueId = props.match.params.id;

  // Load all teams by league and store them with setteams
  useEffect(() => {
    loadTeams();
  }, []);

  // Loads all books and sets them to books
  function loadTeams() {
    API.getTeamByLeague(leagueId)
      .then((res) => setteams(res.data))
      .catch((err) => console.log(err.message));
  }

  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-white bg-dark text-center">
        <h1>Teams List</h1>
      </div>
      {teams.length ? (
        <div>
          <div className="row teamCard">
            {teams.map((team) => {
              return (
                <div className="col-sm-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={
                        team.image === "https://picsum.photos/200"
                          ? team.image
                          : `data:image/png;base64,${team.image}`
                      }
                      alt="Team"
                    />
                    <div className="card-text" style={{ color: "black" }}>
                      <h5 className="card-title">{team.name}</h5>
                    </div>
                    <Link to={"/team/" + team.name} className="btn btnCust">
                      {team.name} Info
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h3>No teams to display</h3>
      )}
    </div>
  );
};

export default Teams;

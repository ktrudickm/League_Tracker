import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";

const Team = () => {
  const [team, setteam] = useState([]);
  const { name } = useParams();

  //Load team and store them with setTeams
  useEffect(() => {
    console.log(name);
    loadTeam();
  }, []);

  const loadTeam = () => {
    API.getTeamsByStr(name)
      .then((res) => setteam(res.data))
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      {team.length ? (
        <div className="col-sm-12">
          <div
            className="card align-items-center playerCard"
            style={{ width: "30rem" }}
          >
            <img className="card-img-top" src={team[0].image} alt="Team" />
            <div className="card-body" style={{ color: "black" }}>
              <h5 className="card-title">{team[0].name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Championship: {team[0].stats[0].championships}
              </li>
              <li className="list-group-item">
                Made Playoffs: {team[0].stats[0].madePlayoffs}
              </li>
              <li className="list-group-item">Rank: {team[0].stats[0].rank}</li>
              <li className="list-group-item">Wins: {team[0].stats[0].wins}</li>
              <li className="list-group-item">
                Losses: {team[0].stats[0].losses}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <p>Nothing to display</p>
      )}
    </>
  );
};
export default Team;

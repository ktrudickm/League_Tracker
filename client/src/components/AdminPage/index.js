import React, { useState } from "react";
import API from "../../utils/API";

const AdminPage = (props) => {
  const [value, setValue] = useState("");
  const [teamData, setTeamData] = useState({
    name: "",
    image: "https://picsum.photos/200",
    stats: {
      championships: 0,
      madePlayoffs: false,
      rank: 0,
      wins: 0,
      losses: 0,
      draws: 0,
      gamesPlayed: 0,
      goalsScored: 0,
      goalsAgainst: 0,
    },
    league_key: 0,
    key: Math.floor(Math.random() * 100),
  });

  const handleEdit = (e) => {
    setValue(e);
  };

  const handleTeamName = (e) => {
    console.log(e);
    setTeamData({ ...teamData, name: e });
    console.log(teamData);
  };

  const handleSubmitLeague = () => {
    API.adminAddLeague({
      name: value,
      key: Math.floor(Math.random() * 100),
      image: "https://picsum.photos/200",
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const handleSubmitTeam = () => {
    API.adminAddTeam({
      name: teamData.name,
      image: "https://picsum.photos/200",
      stats: {
        championships: 0,
        madePlayoffs: false,
        rank: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        gamesPlayed: 0,
        goalsScored: 0,
        goalsAgainst: 0,
      },
      league_key: teamData.league_key,
      key: Math.floor(Math.random() * 100),
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setTeamData({ ...teamData, league_key: e.target.value });
  };

  return (
    <>
      <li className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Create League
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="League Name"
          aria-label="League Name"
          aria-describedby="basic-addon1"
          onChange={(e) => handleEdit(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => handleSubmitLeague()}
        >
          Submit
        </button>
      </li>
      <li className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Create Team
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Team Name"
          aria-label="Team Name"
          aria-describedby="basic-addon1"
          onChange={(e) => handleTeamName(e.target.value)}
        />
        <div className="mb-3 w-30">
          <label htmlFor="Team" className="form-label">
            Select Your League
          </label>
          {props.leagues.length ? (
            <select
              value={teamData.name}
              onChange={(e) => handleInputChange(e)}
              className="form-select"
              aria-label="Default select example"
              name="league"
            >
              {props.leagues.map((league) => {
                return (
                  <option value={league.key} key={league._id}>
                    {league.name}
                  </option>
                );
              })}
            </select>
          ) : (
            <h4>No teams to display yet.</h4>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => handleSubmitTeam()}
        >
          Submit
        </button>
      </li>
    </>
  );
};

export default AdminPage;

import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import API from "../../utils/API";

const AdminPage = (props) => {
  const [value, setValue] = useState({ image: "https://picsum.photos/200" });
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
    setValue({ name: e });
  };

  const handleTeamName = (e) => {
    console.log(e);
    setTeamData({ ...teamData, name: e });
    console.log(teamData);
  };

  const handleSubmitLeague = () => {
    API.adminAddLeague({
      name: value.name,
      key: Math.floor(Math.random() * 100),
      image: value.image,
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const onTeamDrop = (imageFile, imageURL) => {
    const base64 = imageURL[0];
    const base64URL = base64.split(";base64,").pop();
    setTeamData({ ...teamData, image: base64URL });
    console.log(teamData);
  };
  const onLeagueDrop = (imageFile, imageURL) => {
    const base64 = imageURL[0];
    const base64URL = base64.split(";base64,").pop();
    setValue({ ...value, image: base64URL });
    console.log(teamData);
  };

  let teamImgSrc =
    teamData.image === "https://picsum.photos/200"
      ? "https://picsum.photos/200"
      : null;

  let leagueImgSrc =
    value.image === "https://picsum.photos/200"
      ? "https://picsum.photos/200"
      : null;

  const handleSubmitTeam = () => {
    API.adminAddTeam({
      name: teamData.name,
      image: teamData.image,
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
      <span className="input-group-text" id="basic-addon1">
        Create League
      </span>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter league name"
          aria-label="League Name"
          aria-describedby="basic-addon1"
          onChange={(e) => handleEdit(e.target.value)}
        />
      </div>
      <div className="adminImage">
        <img
          src={leagueImgSrc || `data:image/png;base64,${value.image}`}
          alt="league image"
          style={{ height: "10rem", margin: "10px 0px 0px 30px" }}
        />
        <ImageUploader
          buttonClassName="adminUpload"
          withLabel={false}
          withIcon={false}
          withPreview={false}
          singleImage={true}
          buttonText="Choose image"
          onChange={onLeagueDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          fileSizeError="File size is too big. Max size is 5mb."
        />
      </div>
      <button
        type="submit"
        className="btn btn-secondary"
        onClick={() => handleSubmitLeague()}
        style={{ marginLeft: "39px", marginBottom: "10px" }}
      >
        Submit League
      </button>
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{ textAlign: "center" }}
      >
        Create Team
      </span>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter team name"
          aria-label="Team Name"
          aria-describedby="basic-addon1"
          onChange={(e) => handleTeamName(e.target.value)}
        />
      </div>
      <div className="mb-3 w-30">
        {props.leagues.length ? (
          <select
            // value={teamData.name}
            onChange={(e) => handleInputChange(e)}
            className="form-select"
            aria-label="Default select example"
            name="league"
          >
            {/* <option selected>Select a league</option> */}
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
      <div className="adminImage">
        <img
          src={teamImgSrc || `data:image/png;base64,${teamData.image}`}
          alt="team image"
          style={{ height: "10rem", margin: "10px 0px 0px 30px" }}
        />
        <ImageUploader
          buttonClassName="adminUpload"
          withLabel={false}
          withIcon={false}
          withPreview={false}
          singleImage={true}
          buttonText="Choose image"
          onChange={onTeamDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          fileSizeError="File size is too big. Max size is 5mb."
        />
      </div>
      <button
        type="submit"
        className="btn btn-secondary"
        onClick={() => handleSubmitTeam()}
        style={{ marginLeft: "45px" }}
      >
        Submit Team
      </button>
    </>
  );
};

export default AdminPage;

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router";
import API from "../../utils/API";
import "./style.css";
import Stat from "./stat";

const PlayerPage = (props) => {
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  let statItems = [];
  let { stats } = userData;
  console.log(stats);

  useEffect(() => {
    console.log(id);
    loadUserData();
  }, []);

  function loadUserData() {
    API.getSingleUserData(id)
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  }

  const labels = [
    "Goals",
    "Assists",
    "Games Played",
    "Yellow Cards",
    "Red Cards",
    "Goals Per Game",
  ];

  let imgSrc =
    userData.image === "https://picsum.photos/200"
      ? "https://picsum.photos/200"
      : null;
  if (stats) {
    for (const key in stats) {
      statItems.push(
        <Stat key={userData._id} name={key} stat={stats[key]} labels={labels} />
      );
    }
    console.log(statItems);
  }

  return (
    <div
      className="card align-items-center playerCard"
      style={{ width: "25rem" }}
    >
      <img
        src={imgSrc || `data:image/png;base64,${userData.image}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{`${userData.first_name} ${userData.last_name}`}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="card-text jersey">{`# ${userData.jersey}`}</li>
        <li className="card-text">
          <span className="statHeader">Position: </span>
          {`${userData.position}`}
        </li>
        {statItems}
      </ul>
      <div className="card-body">{/* Player bio? Team name? */}</div>
    </div>
  );
};

export default withRouter(PlayerPage);

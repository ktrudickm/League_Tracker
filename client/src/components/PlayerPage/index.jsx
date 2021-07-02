import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router";
import API from "../../utils/API";
import "./style.css";
import Stat from "./stat";

const PlayerPage = (props) => {
  // const { _id, image, first_name, last_name, position, stats, jersey } = props;
  const [userData, setUserData] = useState({});
  const { id } = useParams();

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

  let imgSrc =
    userData.image === "https://picsum.photos/200"
      ? "https://picsum.photos/200"
      : null;

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
        {/* {userData.stats.map((stat) => (
          <Stat key={userData._id} stat={stat} />
        ))} */}
      </ul>
      <div className="card-body">{/* Player bio? Team name? */}</div>
    </div>
  );
};

export default withRouter(PlayerPage);

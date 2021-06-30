import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router";
import API from "../../utils/API";
import "./style.css";
import Stat from "./stat";

const PlayerPage = (props) => {
  // const { _id, image, first_name, last_name, position, stats, jersey } = props;
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    loadUserData();
  }, [id]);

  function loadUserData() {
    API.getSingleUserData(id)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err.message));
  }
  return (
    <div className="card">
      <img src={userData.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{`${userData.first_name} ${userData.last_name}`}</h5>
        <p className="card-text">{`Position: ${userData.position}`}</p>
        <p className="card-text">{`# ${userData.jersey}`}</p>
      </div>
      <ul className="list-group list-group-flush">
        {/* {stats.map((stat) => (
          <Stat key={_id} stat={stat} />
        ))} */}
      </ul>
      <div className="card-body">{/* Player bio? Team name? */}</div>
    </div>
  );
};

export default withRouter(PlayerPage);

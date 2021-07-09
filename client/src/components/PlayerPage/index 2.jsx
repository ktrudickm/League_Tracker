import React from "react";
import "./style.css";
import Stat from "./stat";

const PlayerPage = (props) => {
  const { _id, image, first_name, last_name, position, stats, jersey } = props;
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{`${first_name} ${last_name}`}</h5>
        <p className="card-text">{`Position: ${position}`}</p>
        <p className="card-text">{`# ${jersey}`}</p>
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

export default PlayerPage;

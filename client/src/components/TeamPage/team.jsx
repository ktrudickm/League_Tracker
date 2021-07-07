import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const Team = (props) => {
    const teamName = props.match.params.name;

  return(
      <div>
          <div className="card">
              <div className="card-body">
                  <Link to={"/teamstats/" + teamName} className="card-link">Team Stats</Link>
              </div>
          </div>
          <div className="card">
              <div className="card-body">
                  <Link to={"/roster/" + teamName} className="card-link">Roster</Link>
              </div>
          </div>
      </div>
  );
};
export default Team;

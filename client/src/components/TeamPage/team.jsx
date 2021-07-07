import React, { useState, useEffect } from "react";

const Team = (props) => {
    const teamName = props.match.params.name;

  return(
      <div>
          <div className="card">
              <div className="card-body">
                  <a href={"/teamstats/" + teamName} className="card-link">Team Stats</a>
              </div>
          </div>
          <div className="card">
              <div className="card-body">
                  <a href={"/roster/" + teamName} className="card-link">Roster</a>
              </div>
          </div>
      </div>
  );
};
export default Team;

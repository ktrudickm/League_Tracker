import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./homePage.jsx"
import Leagues from "./Leagues.jsx";
import Teams from "./Teams.jsx"


ReactDOM.render(
  <div>
    <HomePage/>
    <Leagues
    title='Leagues'
    body='View Leagues'
    logoUrl=''
    />
    <Teams
    title='Teams'
    body='View Teams'
    logoUrl=''
    />
  </div>
)

export default HomePage;
export default Leagues;
export default Teams;



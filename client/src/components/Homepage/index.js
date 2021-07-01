<<<<<<< HEAD
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


=======
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function HomePage(props) {
    return (
        <div className="main">
            <h2>Leagues:</h2>
            <div className="card-container">
                <div className="card">
                    <div>Test card</div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
>>>>>>> 84115bcb24f775fbb15afd7ef7966d13ec528320

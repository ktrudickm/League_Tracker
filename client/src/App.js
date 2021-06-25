import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import Teams from "./components/TeamsPage/teamsPage"

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/teamsPage" component={Teams} />
      </div>
    </Router>
  );
}

export default App;

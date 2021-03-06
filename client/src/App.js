import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import ProtectedRoute from "./components/UtilComponents/protectedRoute.jsx";
import { AppContext } from "./utils/context";
import NavBar from "./components/NavBar/navBar";
import PlayerPage from "./components/PlayerPage";
import UserPage from "./components/UserPage";
import RegisterPlayer from "./components/RegisterPage/RegisterPlayer";
import Teams from "./components/TeamsPage/teamsPage";
import Login from "./components/LoginPage/LoginPage";
import HomePage from "./components/Homepage";
import Footer from "./components/Footer/Footer";
import Team from "./components/TeamPage/team";
import TeamStats from "./components/TeamStatsPage/teamstats";
import Roster from "./components/RosterPage/roster";

import "./App.css";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAdmin, setAdminStatus] = useState(false);
  const [sessionID, setSessionID] = useState("");
  const [sessionUN, setSessionUN] = useState("");

  return (
    <>
      <AppContext.Provider
        value={{
          isAuthenticated,
          userHasAuthenticated,
          sessionID,
          setSessionID,
          sessionUN,
          setSessionUN,
          isAdmin,
          setAdminStatus,
        }}
      >
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute exact path="/user" component={UserPage} />
            <Route path="/player/:id" component={PlayerPage} />
            <Route exact path="/register" component={RegisterPlayer} />
            <Route path="/teamsPage/:id" component={Teams} />
            <Route path="/team/:name" component={Team} />
            <Route exact path="/login" component={Login} />
            <Route path="/teamstats/:name" component={TeamStats} />
            <Route path="/roster/:name" component={Roster} />
          </Switch>
        </div>
      </AppContext.Provider>
      <Footer />
    </>
  );
}

export default withRouter(App);

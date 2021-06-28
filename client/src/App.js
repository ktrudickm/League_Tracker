import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import PlayerPage from "./components/PlayerPage/index";
import UserPage from "./components/UserPage";
import RegisterPlayer from "./components/RegisterPage/RegisterPlayer";
import Teams from "./components/TeamsPage/teamsPage"
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/user" component={UserPage} />
          <Route exact path="/player" component={PlayerPage} />
          <Route exact path="/register" component={RegisterPlayer} />
          <Route exact path="/teamsPage" component={Teams} />
        </Switch>
      </div>
    </>
  );
}

export default App;

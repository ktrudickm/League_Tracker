import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import PlayerPage from "./components/PlayerPage";
import UserPage from "./components/UserPage";
import RegisterPlayer from "./components/RegisterPage/RegisterPlayer";
import Teams from "./components/TeamsPage/teamsPage";
import Login from "./components/LoginPage/LoginPage";
import HomePage from "./components/Homepage";
import Footer from "./components/Footer/Footer";
import Team from "./components/TeamPage/team";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user" component={UserPage} />
          <Route path="/player/:id" component={PlayerPage} />
          <Route exact path="/register" component={RegisterPlayer} />
          <Route exact path="/teamsPage" component={Teams} />
          <Route path="/team/:name" component={Team}/>
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;

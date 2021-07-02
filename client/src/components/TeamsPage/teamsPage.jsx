import React, {useState,useEffect} from "react";
import API from "../../utils/API";

function Teams(){
    // Setting our component's initial state
  const [teams, setteams] = useState([])
  const [formObject, setFormObject] = useState({})

// Load all books and store them with setBooks
useEffect(() => {
  loadTeams()
}, [])

// Loads all books and sets them to books
function loadTeams() {
  API.getTeams()
    .then(res =>
      setteams(res.data)
    )
    .catch(err => console.log(err.message));
};

return (
  <div>
    <div className="jumbotron jumbotron-fluid text-white bg-dark text-center">
    <h1>Teams List</h1>
    </div>

    {teams.length ? (
    <div>
      <div className="row">
      {teams.map(team => {
        return(
        <div className="col-sm-3">
          <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={team.image} alt="Team"/> 
              <div className="card-body" style={{color: "black"}}>
                <h5 className="card-title">{team.name}</h5>
              </div>
              <a href={"/team/" + team.name} className="btn btn-primary">{team.name} Info</a>         
          </div>
        </div>
      
        );
      })} 
      </div>
    </div>      
    ) : (
      <h3>No teams to display</h3>
    )}
    </div>
  );
  
}

export default Teams;
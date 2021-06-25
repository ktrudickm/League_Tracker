import React, {useState} from "react";

function Teams(){
    // Setting our component's initial state
  const [teams, setteams] = useState([])
  const [formObject, setFormObject] = useState({})



return (
    <div className="jumbotron jumbotron-fluid text-white bg-dark text-center">
    <h1>Teams List</h1>
    </div>
  );
}

export default Teams;
import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function RegisterPlayer(){

    const [teams, setteams] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadTeams()
      }, [])

    function loadTeams() {
    API.getTeams()
        .then(res => 
            setteams(res.data)
        )
        .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.first_name && formObject.last_name && formObject.password) {
        API.signupPlayer({
        first_name: formObject.first_name,
        last_name: formObject.last_name,
        username: formObject.username,
        email: formObject.email,
        password: formObject.password,
        team_key: formObject.team
        })
        .then(alert("You are now registered!"))
        .then(res => console.log(res))
        .then(() => setFormObject({
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            password: "",
            team_key: ""
        }))
        .catch(err => console.log(err));
    }
    };

    return (
        <div class="card w-75 mx-auto mt-5 mb-5">
            <div class="card-body">
                <div class="jumbotron mx-auto">
                    <h2 class="display-4 text-center">Register as a Player.</h2>
                </div>
                <form>
                    <div className="mb-3 w-30">
                        <label for="first_name" className="form-label">First Name</label>
                        <input 
                            onChange={handleInputChange}
                            name="first_name"
                            type="text" 
                            className="form-control" 
                            id="first_name"
                            value={formObject.first_name}>
                        </input>
                    </div>
                    <div className="mb-3 w-30">
                        <label for="last_name" className="form-label">Last Name</label>
                        <input 
                            onChange={handleInputChange}
                            name="last_name"
                            type="text" 
                            className="form-control" 
                            id="last_name"
                            value={formObject.last_name}>
                        </input>
                    </div>
                    <div className="mb-3 w-30">
                        <label for="UserName" className="form-label">User Name</label>
                        <input
                            onChange={handleInputChange}
                            name="username"
                            type="text"
                            className="form-control"
                            id="UserName"
                            value={formObject.username}>
                        </input>
                    </div>
                    <div className="mb-3 w-30">
                        <label for="InputEmail" className="form-label">Email address</label>
                        <input 
                            onChange={handleInputChange}
                            name="email"
                            type="email"
                            className="form-control"
                            id="InputEmail"
                            aria-describedby="emailHelp"
                            value={formObject.email}>
                        </input>
                    </div>
                    <div className="mb-3 w-30">
                        <label for="InputPassword" className="form-label">Password</label>
                        <input
                            onChange={handleInputChange}
                            name="password"
                            type="password"
                            className="form-control"
                            id="InputPassword"
                            value={formObject.password}>
                        </input>
                    </div>
                    <div className="mb-3 w-30">
                    <label for="Team" className="form-label">Select Your Team</label>
                    {teams.length ? (
                        <select value={formObject.team} onChange={handleInputChange} name="team" className="form-select w-30 mb-3" aria-label="Default select example">
                                {teams.map(Team => {
                                    return (
                                        <option value={Team.key} key={Team._id}>{Team.name}</option>
                                    )
                                })}
                        </select>
                        ) : (
                            <h4>No teams to display yet.</h4>
                    )}
                    </div>
                    <button 
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleFormSubmit}
                    >Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPlayer;

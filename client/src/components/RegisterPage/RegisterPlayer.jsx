import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function RegisterPlayer(){

    const [teams, setteams] = useState([])
    const [formObject, setFormObject] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        team: ""
      })

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
    if (formObject.title && formObject.author) {
        API.signupPlayer({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        username: formObject.username,
        email: formObject.email,
        password: formObject.password,
        team: formObject.team
        })
        .then(() => setFormObject({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            team: ""
        }))
        .then(() => loadTeams())
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
                        <label for="FirstName" className="form-label">First Name</label>
                        <input 
                            onChange={handleInputChange}
                            type="text" 
                            className="form-control" 
                            id="FirstName"
                            value={formObject.firstName}>
                        </input>
                    </div>
                    <div className="mb-3 w-30">
                        <label for="LastName" className="form-label">Last Name</label>
                        <input 
                            onChange={handleInputChange}
                            type="text" 
                            className="form-control" 
                            id="LastName"
                            value={formObject.lastName}>
                        </input>
                    </div>
                    <div className="mb-3 w-30">
                        <label for="UserName" className="form-label">User Name</label>
                        <input
                            onChange={handleInputChange}
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
                            type="password"
                            className="form-control"
                            id="InputPassword"
                            value={formObject.password}>
                        </input>
                    </div>
                    <select value={formObject} onChange={handleInputChange} className="form-select w-30 mb-3" aria-label="Default select example">
                            {teams.map(Team => {
                                return (
                                    <option value={Team.name} key={Team._id}>{Team.name}</option>
                                )
                            })}
                    </select>
                    <button 
                        type="submit"
                        className="btn btn-primary"
                        disabled={!(formObject.firstName && formObject.lastName && formObject.email && formObject.username && formObject.password && formObject.team)}
                        onClick={handleFormSubmit}
                    >Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPlayer;

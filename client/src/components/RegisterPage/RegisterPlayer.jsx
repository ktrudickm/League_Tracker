import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function RegisterPlayer() {
  const [teams, setteams] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadTeams();
  }, []);

  function loadTeams() {
    API.getTeams()
      .then((res) => setteams(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log(event.target.email);
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.firstName && formObject.lastName && formObject.password) {
      API.signupPlayer({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        username: formObject.username,
        email: formObject.email,
        password: formObject.password,
        team: formObject.team,
      })
        .then(() =>
          setFormObject({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            team: "",
          })
        )
        .then(() => loadTeams())
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="card w-75 mx-auto mt-5 mb-5">
      <div className="card-body">
        <div className="jumbotron mx-auto">
          <h2 className="display-4 text-center">Register as a Player.</h2>
        </div>
        <form>
          <div className="mb-3 w-30">
            <label htmlFor="FirstName" className="form-label">
              First Name
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="FirstName"
              value={formObject.firstName}
              name="first_name"
            ></input>
          </div>
          <div className="mb-3 w-30">
            <label htmlFor="LastName" className="form-label">
              Last Name
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="LastName"
              value={formObject.lastName}
              name="last_name"
            ></input>
          </div>
          <div className="mb-3 w-30">
            <label htmlFor="UserName" className="form-label">
              User Name
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="UserName"
              value={formObject.username}
              name="username"
            ></input>
          </div>
          <div className="mb-3 w-30">
            <label htmlFor="InputEmail" className="form-label">
              Email address
            </label>
            <input
              onChange={handleInputChange}
              type="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
              value={formObject.email}
              name="email"
            ></input>
          </div>
          <div className="mb-3 w-30">
            <label htmlFor="InputPassword" className="form-label">
              Password
            </label>
            <input
              onChange={handleInputChange}
              type="password"
              className="form-control"
              id="InputPassword"
              value={formObject.password}
              name="password"
            ></input>
          </div>
          <div className="mb-3 w-30">
            <label htmlFor="Team" className="form-label">
              Select Your Team
            </label>
            {teams.length ? (
              <select
                value={formObject.team}
                onChange={handleInputChange}
                className="form-select w-30 mb-3"
                aria-label="Default select example"
                name="team"
              >
                {teams.map((Team) => {
                  return (
                    <option value={Team.name} key={Team._id}>
                      {Team.name}
                    </option>
                  );
                })}
              </select>
            ) : (
              <h4>No teams to display yet.</h4>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              !(
                formObject.firstName &&
                formObject.lastName &&
                formObject.email &&
                formObject.username &&
                formObject.password &&
                formObject.team
              )
            }
            onClick={handleFormSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPlayer;

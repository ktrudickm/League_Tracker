import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function RegisterPlayer(props) {
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
    const { id, value } = event.target;
    console.log(id);
    setFormObject({ ...formObject, [id]: value });
    console.log(formObject);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject);
    // if (formObject.first_name.length !== 0 && formObject.last_name.length !== 0 && formObject.password.length !== 0) {
      API.signupPlayer({
        first_name: formObject.first_name,
        last_name: formObject.last_name,
        username: formObject.username,
        email: formObject.email,
        password: formObject.password,
        team_key: formObject.team_key,
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
        .then(() => {
          loadTeams();
          props.history.push("/login");
        })
        .catch((err) => {
          console.error(err);
          alert("ERROR when trying to sign up, please try again");
        });
    // } else {
    //   alert("ERROR when trying to sign up, please try again");
    // }
  }

  return (
    <div className="card w-75 mx-auto mt-5 mb-5 playerCard">
      <div className="card-body">
        <div className="jumbotron mx-auto">
          <h2 className="display-4 text-center">Register as a Player</h2>
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
              id="first_name"
              value={formObject.firstName}
              name="first_name"
            ></input>
          </div>
          <div className="mb-3 w-30">
            <label htmlFor="last_name" className="form-label">
              Last Name
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="last_name"
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
              id="username"
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
              id="email"
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
              id="password"
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
                value={formObject.team_key}
                onChange={handleInputChange}
                className="form-select w-30 mb-3"
                aria-label="Default select example"
                name="team"
                id="team_key"
              >
                {teams.map((Team) => {
                  return (
                    <option value={Team.key} key={Team._id}>
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

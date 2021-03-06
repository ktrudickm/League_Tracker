import React, { useState } from "react";
import { useAppContext } from "../../utils/context";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import API from "../../utils/API";

function LoginPage(props) {
  const [formObject, setFormObject] = useState({});
  const { userHasAuthenticated } = useAppContext();
  const { setSessionID } = useAppContext();
  const { setSessionUN } = useAppContext();
  const { setAdminStatus } = useAppContext();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email && formObject.password) {
      API.loginPlayer({
        email: formObject.email,
        password: formObject.password,
      })
        .then((res) => {
          userHasAuthenticated(true);
          setSessionID(res.data._id);
          setSessionUN(res.data.username);
          setAdminStatus(res.data.isAdmin);
          props.history.push("/");
        })
        .then(() =>
          setFormObject({
            email: "",
            password: "",
          })
        )
        // .then(() => loadPlayers())
        .catch((err) => {
          console.log(err);
          alert("Login failed, please try agian.");
        });
    }
  }
  return (
    <div
      className="card align-items-center playerCard my-8 pb-5"
      style={{ width: "35rem" }}
    >
      <div className="card-body">
        <div>
          <div className="jumbotron">
            <h2
              className="display-4 text-center mb-5"
              style={{ fontWeight: 600 }}
            >
              Sign In
            </h2>
          </div>
          <form style={{ width: "25rem" }}>
            <div className="mb-3">
              <label for="InputEmail" className="form-label">
                Email Address
              </label>
              <input
                onChange={handleInputChange}
                value={formObject.email}
                type="email"
                className="form-control"
                id="InputEmail"
                aria-describedby="emailHelp"
                name="email"
              ></input>
            </div>
            <div className="mb-3">
              <label for="InputPassword" className="form-label">
                Password
              </label>
              <input
                onChange={handleInputChange}
                value={formObject.password}
                type="password"
                className="form-control"
                id="InputPassword"
                name="password"
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              // disabled={!(formObject.email && formObject.password)}
              onClick={handleFormSubmit}
            >
              Login
            </button>
          </form>
          <br/>
          <Link to="/register">signup</Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginPage);

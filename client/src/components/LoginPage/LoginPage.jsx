import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {

    const history = useHistory();

    const routeChange = () =>{ 
      let path = `RegisterPlayer`; 
      history.push(path);
    }

    return (
        <div class="card w-75 mx-auto mt-5 mb-5">
            <div class="card-body">
                <div>
                    <div class="jumbotron">
                        <h2 class="display-4 text-center">Sign In</h2>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label for="InputEmail" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"></input>
                        </div>
                        <div className="mb-3">
                            <label for="InputPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="InputPassword"></input>
                        </div>
                        <button 
                            type="submit"
                            className="btn btn-primary"
                        >Login</button>
                        <button 
                            type="register"
                            className="btn btn-primary mx-3"
                            onClick={routeChange}
                        >Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
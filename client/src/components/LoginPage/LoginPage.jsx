import React from "react";

const LoginPage = () => {
    return (
        <div>
            <div class="jumbotron">
                <h2 class="display-4">Log In</h2>
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
                    className="btn btn-primary"
                >Register</button>
            </form>
        </div>
    );
};

export default LoginPage;
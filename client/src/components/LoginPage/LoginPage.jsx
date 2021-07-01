import React, { useState } from "react";
import API from "../../utils/API";

function LoginPage(){

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.email && formObject.password) {
            API.loginPlayer({
                email: formObject.email,
                password: formObject.password
            })
            .then(() => setFormObject({
                email: "",
                password: ""
            }))
            .then(() => loadPlayers())
            .catch(err => console.log(err));
        }
    };


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
                            <input
                                onChange={handleInputChange}
                                value={formObject.email}
                                type="email"
                                className="form-control"
                                id="InputEmail"
                                aria-describedby="emailHelp">
                            </input>
                        </div>
                        <div className="mb-3">
                            <label for="InputPassword" className="form-label">Password</label>
                            <input 
                                onChange={handleInputChange}
                                value={formObject.password}
                                type="password"
                                className="form-control"
                                id="InputPassword">
                            </input>
                        </div>
                        <button 
                            type="submit"
                            className="btn btn-primary"
                            disabled={!(formObject.email && formObject.password)}
                            onClick={handleFormSubmit}
                        >Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
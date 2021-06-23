import React from "react";

const RegisterPlayer = () => {
    return (
        <div>
            <h2 classNameName='RegisterHeading'>Register as a Player</h2>
            <form>
                <div className="mb-3">
                    <label for="PlayerName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="PlayerName"></input>
                </div>
                <div className="mb-3">
                    <label for="UserName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="UserName"></input>
                </div>
                <div className="mb-3">
                    <label for="InputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"></input>
                </div>
                <div className="mb-3">
                    <label for="InputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword"></input>
                </div>
                <div className="mb-3">
                    <label for="formFile" className="form-label">Upload Photo</label>
                    <input className="form-control" type="file" id="formFile"></input>
                </div>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Select Your League</option>
                    <option value="1">One</option>
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Select Your Team</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                </select>
                <button 
                    type="submit"
                    className="btn btn-primary"
                >Submit</button>
            </form>
        </div>
    );
};

export default RegisterPlayer;
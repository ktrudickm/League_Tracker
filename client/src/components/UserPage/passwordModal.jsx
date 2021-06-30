import React, { useState } from "react";

const PasswordModal = (props) => {
  const { showModal, toggle, onSubmit } = props;
  // const [password, setPassword] = useState(prevPassword);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [error, setError] = useState(false);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  // const [prevError, setPrevError] = useState(false);

  const dismissModal = () => {
    toggle();
  };

  const handleSubmit = () => {
    setInputOne("");
    setInputTwo("");
    dismissModal();
    onSubmit(second);
  };

  const handleFirst = (e) => {
    setInputOne(e);
    setFirst(e);
  };
  const handleSecond = (e) => {
    setInputTwo(e);
    setSecond(e);
    setError(true);
    if (e === first) {
      setError(false);
    }
  };

  return (
    <>
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="passwordModal"
        style={{
          display: `${showModal ? "block" : "none"}`,
        }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Change Password
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={dismissModal}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                {/* <div className="form-group">
                  <label htmlFor="oldPassword" className="col-form-label">
                    Enter previous password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="oldPassword"
                  />
                  <span className={`error ${prevError ? "" : "hidden"}`}>
                    Previous password incorrect. Please try again.
                  </span>
                </div> */}
                <div className="form-group">
                  <label htmlFor="newPassword-1" className="col-form-label">
                    Enter new password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword-1"
                    value={inputOne}
                    onChange={(e) => handleFirst(e.target.value)}
                  />
                  <label htmlFor="newPassword-2" className="col-form-label">
                    Re-enter new password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword-2"
                    value={inputTwo}
                    onChange={(e) => handleSecond(e.target.value)}
                  />
                  <label htmlFor="newPassword-2" className="col-form-label">
                    <span className={`error ${error ? "" : "hidden"}`}>
                      Passwords must match.
                    </span>
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className={`btn btn-primary ${error ? "disabled" : ""}  `}
                onClick={handleSubmit}
              >
                Submit new password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordModal;

import React, { useState } from "react";

const EditModal = (props) => {
  const { showModal, toggle, onEdit, field } = props;
  // const [password, setPassword] = useState(prevPassword);
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");
  // const [prevError, setPrevError] = useState(false);

  const dismissModal = () => {
    toggle();
  };

  const handleSubmit = () => {
    setInput("");
    dismissModal();
    onEdit(field, value);
  };

  const handleEdit = (e) => {
    setInput(e);
    setValue(e);
  };

  return (
    <>
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="editModal"
        style={{
          display: `${showModal ? "block" : "none"}`,
        }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Change {field}
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
                <label htmlFor="editForm" className="col-form-label">
                  Enter a new value for {field}:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="editForm"
                  value={input}
                  onChange={(e) => handleEdit(e.target.value)}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;

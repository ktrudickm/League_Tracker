import React, { useState } from "react";

const SearchModal = (props) => {
  const { showModal, toggle, query, results } = props;
  console.log(results);
  const dismissModal = () => {
    toggle();
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
                Search results for "{query}"
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
            <div className="modal-body"></div>
            <div className="modal-footer">
              <span style={{ margin: "auto" }}>
                Click a link above to go to that player's page!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;

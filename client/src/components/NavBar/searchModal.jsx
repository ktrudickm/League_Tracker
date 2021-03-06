import React from "react";
import { Link } from "react-router-dom";

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
          <div className="modal-content modalCustom">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {results.length} result(s) found for "{query}"
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={dismissModal}
              >
                {/* <span aria-hidden="true">&times;</span> */}X
              </button>
            </div>
            <div className="modal-body">
              <ul>
                {results &&
                  results.map((result) => (
                    <li key={result._id} className="searchResult">
                      <Link
                        style={{ textDecoration: "none" }}
                        onClick={dismissModal}
                        to={`/player/${result._id}`}
                      >
                        <span className="resultText">{`${result.first_name} ${result.last_name} (${result.position})`}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
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

import React, { useState } from "react";
import API from "../../utils/API";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import SearchModal from "./searchModal";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState("");
  const [showModal, setModal] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const toggleModal = () => {
    setModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.searchForUsers(search)
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
    toggleModal();
  };
  return (
    <>
      <SearchModal
        toggle={toggleModal}
        showModal={showModal}
        results={results}
        query={search}
      />

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            League.Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end px-4"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/teamsPage"
                >
                  TEAM
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/user">
                  USER
                </NavLink>
              </li>
              <form className="d-flex justify-content-end">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for a player..."
                  aria-label="Search"
                  onChange={(e) => handleSearch(e)}
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Search
                </button>
              </form>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/login">
                  Login/Sign-Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default withRouter(NavBar);

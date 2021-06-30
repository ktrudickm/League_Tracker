import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import "./style.css";

import SearchModal from "./searchModal";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");
  const [showModal, setModal] = useState(false);

  let searchQuery = "";

  useEffect(() => {
    setSearch("");
  }, [showModal]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const toggleModal = () => {
    setModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log(searchQuery);
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
        query={query}
      />

      <nav
        className="navbar navbar-expand-lg sticky-top navCustom"
        style={{
          backgroundColor: "#e76f51",
          borderBottom: "10px solid #2a9d8f",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="brandText">League Tracker</span>
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
                  <span className="linkText">TEAM</span>
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/user">
                  <span className="linkText">USER</span>
                </NavLink>
              </li>
              <form className="d-flex justify-content-end">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for a player..."
                  aria-label="Search"
                  value={search}
                  onChange={(e) => handleSearch(e)}
                />
                <button
                  className="btn buttonCustom"
                  style={{ backgroundColor: "#264653", color: "#fff" }}
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Search
                </button>
              </form>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/login">
                  <span className="linkText">Login/Sign-Up</span>
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

import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { useAppContext } from "../../utils/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faFlagCheckered,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

import SearchModal from "./searchModal";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");
  const [showModal, setModal] = useState(false);

  const { isAuthenticated } = useAppContext();
  const { sessionUN } = useAppContext();

  const logoIcon = <FontAwesomeIcon icon={faFlagCheckered} />;

  const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />;
  const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

  const logBtn = isAuthenticated ? (
    <NavLink className="nav-link" to="/logout">
      <span className="linkText">{logoutIcon} Logout</span>
    </NavLink>
  ) : (
    <NavLink className="nav-link" to="/login">
      <span className="linkText">{loginIcon} Login/Sign-Up</span>
    </NavLink>
  );

  const userIcon = <FontAwesomeIcon icon={faUserAlt} />;

  const userPage = isAuthenticated ? (
    <NavLink className="nav-link" to="/user">
      <span className="linkText">
        {userIcon} {sessionUN}
      </span>
    </NavLink>
  ) : (
    ""
  );

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
        className="navbar navbar-expand-md sticky-top navCustom"
        style={{
          backgroundColor: "#F75C03",
          borderBottom: "5px solid #2a9d8f",
          height: "4rem",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="brandText">League Tracker {logoIcon}</span>
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
              <li className="nav-item px-2">{userPage}</li>
              <li className="nav-item px-2">{logBtn}</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default withRouter(NavBar);

import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function LeaguePage() {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    loadLeagues();
  }, []);

  function loadLeagues() {
    API.getLeagues()
      .then((res) => setLeagues(res.data))
      .catch((err) => console.log(err.message));
  }

  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-white text-center">
        <h1 className="welcome">Welcome to League Tracker!</h1>
        <h2 className="explore">Explore all current in-session leagues:</h2>
      </div>
      {setLeagues.length ? (
        <div>
          <div className="row pb-15 text-center">
            {leagues.map((league) => {
              return (
                <div className="col-lg-4">
                  <div
                    className="card mx-auto"
                    style={{ width: "18rem", backgroundColor: "#f2f1ed" }}
                  >
                    <img
                      className="card-img-top"
                      src={
                        league.image === "https://placekitten.com/300/300"
                          ? league.image
                          : `data:image/png;base64,${league.image}`
                      }
                      alt="Team"
                    />
                    <div className="card-body" style={{ color: "black" }}>
                      <h5 className="card-title">{league.name}</h5>
                    </div>
                    <a
                      href={"/teamsPage/" + league.key}
                      className="btn btnCust"
                    >
                      Link to {league.name} league page
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h3>No leagues to display</h3>
      )}
    </div>
  );
}

export default LeaguePage;

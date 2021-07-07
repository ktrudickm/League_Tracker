import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function LeaguePage(){

    const [leagues, setLeagues] = useState([])
    
    useEffect(() => {
        loadLeagues()
    },[])

    function loadLeagues() {
        API.getLeagues()
            .then(res =>
                setLeagues(res.data)
            )
            .catch(err => console.log(err.message));
    };

    return (
    <div>
        <div className="jumbotron jumbotron-fluid text-white bg-dark text-center">
        <h1>All Leagues</h1>
        </div>
        {setLeagues.length ? (
        <div>
        <div className="row">
        {leagues.map(league => {
            return(
            <div className="col-sm-3">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={league.image} alt="Team"/> 
                <div className="card-body" style={{color: "black"}}>
                    <h5 className="card-title">{league.name}</h5>
                </div>
                <a href={"/league/" + league.name} className="btn btn-primary">{league.name} Info</a>         
            </div>
            </div> 
            );
        })} 
        </div>
        </div>      
    ) : (<h3>No leagues to display</h3>)}
    </div>
  ); 
}

export default LeaguePage;
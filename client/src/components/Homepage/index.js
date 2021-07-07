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
        <div className="jumbotron jumbotron-fluid text-white text-center">
        <h1 className='welcome'>Welcome to the League Tracker!</h1>
        <h2 className='explore'>Explore all current in-session leagues:</h2>
        </div>
        {setLeagues.length ? (
        <div>
        <div className="row pb-15 text-center">
        {leagues.map(league => {
            return(
            <div className="col-lg-4">
            <div className="card mx-auto" style={{width: "18rem"}}>
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
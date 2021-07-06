import React, {useState,useEffect} from "react";
import API from "../../utils/API";
import { useParams } from "react-router-dom";


function Roster(){
    const [roster, setroster] = useState([])
    const [team, setteam] = useState([])
    const { name } = useParams();

    //Load roster and store them with setroster
    useEffect(() => {
        loadRoster()
    }, [])

    const loadRoster = () => {
        API.getTeamsByStr(name)
          .then(res => {
              API.searchUsersByTeam(res.data[0].key)
              .then(res => setroster(res.data))
              .catch(err => console.log(err.message));
          } )      
      };  

    return(
    <div className="row">
        {roster.map(
            team => {
                return(
                <div className="col-sm-2">
                    <div className="card" style={{width: "10rem"}}>
                        <img className="card-img-top img-fluid" src={team.image} alt="Player name"/> 
                        <div className="card-body" >
                            <h5 className="card-title">Name: {team.first_name + " " + team.last_name}</h5>
                            <h5 className="card-title">Position: {team.position}</h5>
                            <h5 className="card-title">Jersey: {team.jersey}</h5>
                        </div>
                    </div>
                </div>
                );
        })};
    </div>
    )
}

export default Roster;
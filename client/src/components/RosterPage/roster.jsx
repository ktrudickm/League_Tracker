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
        <table className="table bg-light">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Jersey</th>
                            </tr>
                    </thead>
        {roster.map(
            team => {
                return(
                    <tbody className="table-body" key={team._id}>
                        <tr>
                            {/* <th scope="row"></th> */}
                            <td><img src={team.image} className="img-responsive" style={{width: "2.5rem"}} alt="Player Image"></img></td>
                            <td>{team.first_name + " " + team.last_name}</td>
                            <td>{team.position}</td>
                            <td>{team.jersey}</td>
                        </tr>
                    </tbody>
                );
        })}
        </table>
    )
}

export default Roster;
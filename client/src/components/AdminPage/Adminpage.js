import React from 'react';
import {Admin} from "react-admin";
import CreateUser from "./AdminPage";
import CreateTeam from "./AdminPage";
import Createleague from "./AdminPage";

function AdminPage() {
    return <div>
                <AdminPage />;
                <CreateUser/>;
                <CreateTeam />;
                <Createleague />;
            </div>  
}

export default AdminPage; 
export default CreateUser; 
export default CreateTeam; 
export default CreateLeague; 
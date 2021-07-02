import React from "react";
import { Create, SimpleForm, EditButton, DeleteButton, TextInput,} from "react-admin";

const CreateUser = (props) => {
    return(
        <Create name='Create a user account' {...props} >
            <SimpleForm>
                <TextInput type='user name'/>
                <TextInput type='first name'/>
                <TextInput type='last name'/>
                <EditButton basePath='/user' />
                <DeleteButton basePath='/user' />
            </SimpleForm>
        </Create>
    )
}

const CreateTeam = (props) => {
    return(
        <Create name='Create a team account' {...props} >
            <SimpleForm>
                <TextInput type='team name'/>
                <TextInput type='first name'/>
                <TextInput type='last name'/>
                <EditButton basePath='/user' />
                <DeleteButton basePath='/user' />
            </SimpleForm>
        </Create>
    )
}

const CreateLeague = (props) => {
    return(
        <Create name='Create a league account' {...props} >
            <SimpleForm>
                <TextInput type='user name'/>
                <TextInput type='first name'/>
                <TextInput type='last name'/>
                <EditButton basePath='/user' />
                <DeleteButton basePath='/user' />
            </SimpleForm>
        </Create>
    )
}
export default AdminPage;
import React from 'react';

function User(props){
    console.log(props.data.name)
    return(
        <div>
            <h1>User Component</h1>
            <h3>{props.data.name}</h3>
            <h3>{props.data.age}</h3>
        </div>
    )
}

export default User;

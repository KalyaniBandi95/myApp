import React from 'react';

const Registration = (props) =>{
    return (
        <div>
            <p>This is Registration Page</p>
            <p>you are Registered with Id: {props.match.params.id}</p>
        </div>
    )
}

export default Registration
import React from 'react';
import './Person.css'

const person = (props) => {
    return(
        <div className="Person">
            <p>My name is {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;
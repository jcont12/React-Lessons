import React from 'react';
import './Person.css'

const person = (props) => {
    return(
        <div className="Person">
            <p>My name is {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <p onClick={props.click}>Click here to delete!</p>
            <input type="text" onChange={props.inputChange} value={props.name} />
        </div>
    )
}

export default person;
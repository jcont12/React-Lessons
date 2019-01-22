import React from 'react';

const input = (props) => {
    return(
        <div>
            <p>Change 1st element name:</p>
            <input type="text" onChange={props.changedName} value={props.name} />
        </div>
    )
}

export default input;
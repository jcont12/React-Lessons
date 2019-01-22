import React from 'react';

const cockpit = (props) => {
    
    const style = {
        backgroundColor: 'blue',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

    return (
        <div>
            <h1>Hello World</h1>
            { props.showPersons ?
            <button onClick={props.toggle}> Hide Names </button>
            : <button onClick={props.toggle}> Show Names </button>
            }
            <br></br>
            <br></br>
            <button style={style} onClick={props.switch.bind(this, "Jorge")}> Change Names </button>
        </div>
    );

};

export default cockpit;
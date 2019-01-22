/*
* The reason why the variable persons doesnt have { and directly goes into parens is because components just return what is going to be rendered, so with braces it would look like => { return ( code )} which thanks to ES6 we can change for => ( code)
*/

import React from 'react';

import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {
        return <Person 
        name={person.name}
        age={person.age}
        click={props.delete.bind(this, index)}
        key={person.id}
        inputChange={(event) => props.input(event, person.id)} />
      }
);

export default persons;
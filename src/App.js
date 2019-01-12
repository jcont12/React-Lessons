import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Input from './Input/Input.js';

class App extends Component {

  state = {
    persons: [
      {id:"0", name:"georgian", age:"29"},
      {id:"1", name:"fersh", age:"25"},
      {id:"2", name:"hope", age:"2"}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {id:"0", name: newName, age:"29"},
        {id:"1", name:"Fer", age:"25"},
        {id:"2", name:"Hope", age:"2"}
      ]
    })
  }

  inputNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const foundPerson = {
      ...this.state.persons[personIndex]
    }

   foundPerson.name = event.target.value;

    const modifiedPersons = [...this.state.persons]

    modifiedPersons[personIndex] = foundPerson;

    this.setState( {persons: modifiedPersons} )
  }

  togglePersonsHandler = () => {
    const arePersonsShowing = this.state.showPersons;
    this.setState({ showPersons: !arePersonsShowing })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons})
  }

  render() {

  // different way to use css:
    const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons;

    if (this.state.showPersons){
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          name={person.name}
          age={person.age}
          click={this.deletePersonHandler.bind(this, index)}
          key={person.id}
          inputChange={(event) => this.inputNameHandler(event, person.id)} />
        })}
      </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        { this.state.showPersons ?
        <button onClick={this.togglePersonsHandler}> Hide Names </button>
        : <button onClick={this.togglePersonsHandler}> Show Names </button>
        }
        <br></br>
        <br></br>
        <button style={style} onClick={this.switchNameHandler.bind(this, "Jorge")}> Change Names </button>
        {persons}
      </div>
    );
  }
}

export default App;

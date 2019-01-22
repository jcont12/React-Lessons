import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons.js';
import Cockpit from '../Cockpit/Cockpit.js';
import Input from '../Components/Input/Input.js';

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
    let persons;

    if (this.state.showPersons){
      persons = (
      <div>
        <Persons
        persons={this.state.persons}
        delete={this.deletePersonHandler.bind(this)}
        input={this.inputNameHandler}
        />
      </div>
      )
    }

    return (
      <div className="App">
        <Cockpit 
          switch={this.switchNameHandler} 
          style={this.style} 
          showpersons={this.state.showPersons} 
          toggle={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;

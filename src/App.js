import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Input from './Input/Input.js';

class App extends Component {

  state = {
    persons: [
      {name:"georgian", age:"29"},
      {name:"fersh", age:"25"},
      {name:"hope", age:"2"}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age:"29"},
        {name:"Fer", age:"25"},
        {name:"Hope", age:"2"}
      ]
    })
  }

  inputNameHandler = (event) => {
    this.setState({
      persons: [
        {name: "Jorge", age:"30"},
        {name: event.target.value, age:"25"},
        {name:"Hope", age:"2"}
      ]
    })
  }

  togglePersonsHandler = () => {
    const arePersonsShowing = this.state.showPersons;
    this.setState({ showPersons: !arePersonsShowing })
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
        {this.state.persons.map(person => {
          return <Person name={person.name} age={person.age} />
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
        <Input changedName={this.inputNameHandler} name={this.state.persons[1].name}/>
        {persons}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Input from './Input/Input.js';

class App extends Component {

  state = {
    persons: [
      {name:"georgian", age:"30"},
      {name:"fersh", age:"26"},
      {name:"hope", age:"2"}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age:"30"},
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
        { this.state.showPersons ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> I am a dog! (and a react children being passed in)</Person>
          </div>
          : null
        }
      </div>
    );
  }
}

export default App;

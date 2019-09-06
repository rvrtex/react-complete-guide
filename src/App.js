import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Red', age: 29},
      {name: 'Michelle', age: 23}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () =>{
    this.setState( {
      persons: [
        {name: 'Bear', age: 28},
        {name: 'Buddy', age: 29},
        {name: 'Michelle', age: 22}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a react App</h1>
        <h2>Testing my source control!</h2>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

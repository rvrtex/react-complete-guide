import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {name: 'Max', age:28},
      {name: 'Max', age:29},
      {name: 'Michelle', age:23}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a react App</h1>
        <h2>Testing my source control!</h2>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name="Manu" age="26"/>
        <Person name="Michelle" age="23">My Hobbie: Raping </Person>
      </div>
    );
  }
}

export default App;

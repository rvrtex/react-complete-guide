import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {id : '23',name: 'Max', age: 28},
      {id : '54234',name: 'Red', age: 29},
      {id : '2342',name: 'Michelle', age: 23}
    ],
    otherState: 'some other value',
    showPersons: false
};

  deleteNameHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...this.state.persons];  
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    });
  };

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render(){
    const style = {
      backgroundColor:'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              click = {() => this.deleteNameHandler(index)}
              name ={person.name} 
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangedHandler(event,person.id)}
              />
          })}
       
      </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi I'm a react App</h1>
        <h2>Testing my source control!</h2>
        <button style = {style} onClick={this.togglePersonHandler}>Toggle Name</button>
        {persons}
          
         
          
      </div>
    );
  }
}
export default App;



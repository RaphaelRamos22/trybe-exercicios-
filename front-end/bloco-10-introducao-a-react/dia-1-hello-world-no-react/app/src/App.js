import './App.css';
import React, { Component } from 'react';
import Header from './compent/Header';

const Task = (value) => {
  return(   
     <li> {value} </li>
  )
 }

 const array = ['JSX', 'ReactDOM.render']

class App extends Component {
  render(){
  return(
    <>
      <Header />
      <ul>{ array.map(element => Task(element))}</ul> 
    </>
    )
  }
}

export default App;

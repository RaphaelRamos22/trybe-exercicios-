import './App.css';
import React, { Component } from 'react';
import Header from './compent/Header';
import Task from './compent/Task';
import Content from './compent/Content';

class App extends Component {
  render(){
    return(
      <>
        <Header />
        <main>
          <Task />
          <Content />
        </main>
      </>
    )
  }
}

export default App;

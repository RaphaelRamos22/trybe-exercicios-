import './App.css';
import React, {Component} from 'react';
import Pokelist from './componet/Pokelist';

class App extends Component {
  render(){ 
    return (
          <main>
              <h1>Pokedex</h1>
              <Pokelist />
          </main>    
      );
  }
}

export default App;

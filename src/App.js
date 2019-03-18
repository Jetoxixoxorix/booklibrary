import React, { Component } from 'react';
import './App.css';
import {Navbar} from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Wypozyczalnia ksiazek</h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import {Navbar} from './Navbar';
import {Books} from './Books';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Books />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import {Navbar} from './Navbar';
import {Books} from './Books';
import {Switch, Route} from 'react-router-dom';
import {AddBook} from './AddBook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/books' component={Books}/>
          <Route path='/add-book' component={AddBook}/>
        </Switch>
      </div>
    );
  }
}

export default App;

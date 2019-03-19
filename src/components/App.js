import React, { Component } from 'react';
import '../styles/App.css';
import {Navbar} from './Navbar';
import {BooksContainer} from '../containers/BooksContainer';
import {Switch, Route} from 'react-router-dom';
import {AddBook} from '../containers/AddBook';
import {BookDetails} from './BookDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/books' component={BooksContainer}/>
          <Route path='/add-book' component={AddBook}/>
          <Route path='/book-details/:id' component={BookDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;

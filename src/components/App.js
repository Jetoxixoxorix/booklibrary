import React from 'react';
import '../styles/App.css';
import {Navbar} from './Navbar';
import {BooksContainer} from '../containers/BooksContainer';
import {Switch, Route} from 'react-router-dom';
import {AddBookContainer} from '../containers/AddBookContainer';
import {BookDetailsContainer} from '../containers/BookDetailsContainer';
import {LoginContainer} from '../containers/LoginContainer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/books' component={BooksContainer}/>
        <Route path='/add-book' component={AddBookContainer}/>
        <Route path='/book-details/:id' component={BookDetailsContainer} />
        <Route path='/login' component={LoginContainer} />
      </Switch>
    </div>
  );
}

export default App;

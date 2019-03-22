import React from 'react';
import '../styles/App.css';
import {Navbar} from './Navbar';
import {BooksContainer} from '../containers/BooksContainer';
import {Switch, Route} from 'react-router-dom';
import {AddBookContainer} from '../containers/AddBookContainer';
import {BookDetailsContainer} from '../containers/BookDetailsContainer';
import {LoginContainer} from '../containers/LoginContainer';
import {HomeContainer} from '../containers/HomeContainer';
import {RegisterContainer} from '../containers/RegisterContainer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomeContainer}/>
        <Route path='/books' component={BooksContainer}/>
        <Route path='/add-book' component={AddBookContainer}/>
        <Route path='/book-details/:id' component={BookDetailsContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/register' component={RegisterContainer} />
      </Switch>
    </div>
  );
}

export default App;

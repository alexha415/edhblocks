import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import store from './store';
import {Provider} from 'react-redux';

import Home from './components/pages/Home/Home';
import EditDeck from './components/pages/EditDeck/EditDeck';
import Deck from './components/pages/Deck/Deck';
import Decks from './components/pages/Decks/Decks';
import LoginPage from './components/pages/Login/LoginPage';
import RegisterPage from './components/pages/Register/RegisterPage';
import Header from './components/layout/header/Header';
import PrivateRoute from './components/routing/PrivateRoute';
import PublicRoute from './components/routing/PublicRoute';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App flex-col">
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <PrivateRoute exact path='/deck/:id' component={Deck}/>
            <PrivateRoute exact path='/decks' component={Decks}/>
            <PrivateRoute exact path='/edit/:id' component={EditDeck}/>
            <PublicRoute exact path='/login' component={LoginPage}/>
            <PublicRoute exact path='/register' component={RegisterPage}/>
          </Switch>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import store from './store';
import {Provider} from 'react-redux';

import Home from './components/pages/Home';
import Create from './components/pages/Create';
import Deck from './components/pages/Deck';
import Header from './components/layout/header/Header';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App flex-container-col">
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/deck' component={Deck}></Route>
            <Route exact path='/create' component={Create}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;

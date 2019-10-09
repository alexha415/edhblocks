import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/layout/header/Header';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

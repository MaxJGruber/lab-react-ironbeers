import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import RandomBeer from './pages/RandomBeer';
// import NewBeer from './pages/NewBeer';
import Beers from './pages/Beers';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Beers" component={Beers} />
        <Route path="/RandomBeer" component={RandomBeer} />
      </Switch>
    </div>
  );
}

export default App;

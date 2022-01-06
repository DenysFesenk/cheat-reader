import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Component } from 'react';
import GameOfNumbers from '../gameOfNumbers/GameOfNumbers';
import Sidebar from '../sidebar/Sidebar';
import './App.scss';
import Calculator from '../calculator/Calculator';
import Changer from '../changer/Changer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Switch>
          <Route path='/'>
            <GameOfNumbers />
          </Route>
          <Route path='/calculator'>
            <Calculator />
          </Route>
          <Route path='/changer'>
            <Changer />
          </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
import { Component } from 'react';
import GameOfNumbers from '../gameOfNumbers/GameOfNumbers';
import Sidebar from '../sidebar/Sidebar';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <GameOfNumbers />
      </div>
    )
  }
}

export default App;
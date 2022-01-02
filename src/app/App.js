// import logo from '../resources/logo.svg';
import redo from '../resources/redo.png'
import { Component } from 'react';
import './App.css';

class ReadingNumbers extends Component {
  constructor(props) {
    super(props)
    this.state = {number: 0}
  }
  
  changeNumber = () => {
    this.setState({ number: this.state.number + 1 })
  }

  resetNumber = () => {
    this.setState({ number: 0 })
  }

  
  render() {
    const {number} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <button 
            className='button-circle'
            onClick={this.changeNumber}
          >+</button>
          <img 
            src={redo} 
            alt="reset" 
            className='btn-reset' 
            onClick={this.resetNumber}
          />
          <p className='resault-number'>{number}</p>
        </header>
      </div>
    );
  }
}

export default ReadingNumbers;

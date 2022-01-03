// import logo from '../resources/logo.svg';
import redo from '../resources/redo.png'
import { Component } from 'react';
import './App.scss';

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
      <div className="app">
        <header className="app__header">
          <button 
            className='app__btn-plus'
            onClick={this.changeNumber}
          >+</button>
          <img 
            className='app__btn-reset' 
            src={redo} 
            alt="reset" 
            onClick={this.resetNumber}
          />
          <p className='app__resault-number'>{number}</p>
        </header>
      </div>
    );
  }
}

export default ReadingNumbers;

// import logo from '../resources/logo.svg';
import redo from '../../resources/redo.png'
import { Component } from 'react';
import './GameOfNumbers.scss';

class GameOfNumbers extends Component {
  constructor(props) {
    super(props)
    this.state = {number: 0}
  }
  
  changeNumber = () => {
    this.setState({ number: this.state.number + 1 })
  }

    //   changeSlide = (i) => {
    //         this.setState(({slide}) => ({
    //             slide: slide + i
    //         }))
    //     }

  resetNumber = () => {
    this.setState({ number: 0 })
  }

  
  render() {
    const {number} = this.state;

    return (
      <div className="gon">
        <header className="gon__header">
          <button 
            className='gon__btn-plus'
            onClick={this.changeNumber}
          >+</button>
          <img 
            className='gon__btn-reset' 
            src={redo} 
            alt="reset" 
            onClick={this.resetNumber}
          />
          <p className='gon__resault-number'>{number}</p>
        </header>
      </div>
    );
  }
}

export default GameOfNumbers;

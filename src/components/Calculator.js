import React from 'react';

export default class Calculator extends React.PureComponent {
  constructor() {
    super();
    this.state = { total: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ total: e.name });
  }

  render() {
    return (
      <div className="calculator">
        <div className="answerDiv"><p className="answer">{this.state.total}</p></div>
        <div className="calcBtns">
          <div className="leftBtns">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button onClick={this.handleClick} name="7" type="button">7</button>
            <button onClick={this.handleClick} name="8" type="button">8</button>
            <button onClick={this.handleClick} name="9" type="button">9</button>
            <button onClick={this.handleClick} name="4" type="button">4</button>
            <button onClick={this.handleClick} name="5" type="button">5</button>
            <button onClick={this.handleClick} name="6" type="button">6</button>
            <button onClick={this.handleClick} name="1" type="button">1</button>
            <button onClick={this.handleClick} name="2" type="button">2</button>
            <button onClick={this.handleClick} name="3" type="button">3</button>
            <button onClick={this.handleClick} name="0" className="item0" type="button">0</button>
            <button onClick={this.handleClick} name="." type="button">.</button>
          </div>
          <div className="rigthBtns">
            <button className="rigth" type="button">&divide;</button>
            <button className="rigth" type="button">x</button>
            <button className="rigth" type="button">-</button>
            <button className="rigth" type="button">+</button>
            <button className="rigth" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

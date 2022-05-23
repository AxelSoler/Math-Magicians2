import React from 'react';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <div className="answerDiv"><p className="answer">0</p></div>
        <div className="calcBtns">
          <div className="leftBtns">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button className="item0" type="button">0</button>
            <button type="button">.</button>
          </div>
          <div className="rigthBtns">
            <button className="rigth" type="button">:</button>
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

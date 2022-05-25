import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [objValue, setObjValue] = useState(0);

  const handleFunction = (e) => {
    const newObj = calculate(objValue, e.target.id);
    setObjValue(newObj);
    const answer = document.querySelector('.answer');
    if (newObj.next !== null) {
      answer.textContent = newObj.next;
    } else {
      answer.textContent = newObj.total;
    }
  };

  return (
    <div className="calculator">
      <div className="answerDiv"><p className="answer">0</p></div>
      <div className="calcBtns">
        <div className="leftBtns">
          <button onClick={handleFunction} id="AC" type="button">AC</button>
          <button onClick={handleFunction} id="+/-" type="button">+/-</button>
          <button onClick={handleFunction} id="%" type="button">%</button>
          <button onClick={handleFunction} id="7" type="button">7</button>
          <button onClick={handleFunction} id="8" type="button">8</button>
          <button onClick={handleFunction} id="9" type="button">9</button>
          <button onClick={handleFunction} id="4" type="button">4</button>
          <button onClick={handleFunction} id="5" type="button">5</button>
          <button onClick={handleFunction} id="6" type="button">6</button>
          <button onClick={handleFunction} id="1" type="button">1</button>
          <button onClick={handleFunction} id="2" type="button">2</button>
          <button onClick={handleFunction} id="3" type="button">3</button>
          <button onClick={handleFunction} id="0" className="item0" type="button">0</button>
          <button onClick={handleFunction} id="." type="button">.</button>
        </div>
        <div className="rigthBtns">
          <button onClick={handleFunction} className="rigth" id="&divide;" type="button">&divide;</button>
          <button onClick={handleFunction} className="rigth" id="x" type="button">x</button>
          <button onClick={handleFunction} className="rigth" id="-" type="button">-</button>
          <button onClick={handleFunction} className="rigth" id="+" type="button">+</button>
          <button onClick={handleFunction} className="rigth" id="=" type="button">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

import Big from 'big.js';

export default function operate(number1, number2, calc) {
  const obj1 = Big(number1);
  const obj2 = Big(number2);

  if (calc === '%') {
    try {
      return obj1.mod(obj2).toString();
    } catch (err) {
      return "Error";
    }
  }
  if (calc === '&divide;') {
    try {
      return obj1.div(obj2).toString();
    } catch (err) {
      return "Error dividing by 0.";
    }
  }
  if (calc === 'x') {
    return obj1.times(obj2);
  }
  if (calc === '-') {
    return obj1.minus(obj2);
  }
  if (calc === '+') {
    return obj1.plus(obj2);
  } 
}
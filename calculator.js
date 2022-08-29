class Calculator {
  calculate(number1, number2, method) {
    return method.cal(number1, number2);
  }
};

class Addition {
  cal(number1, number2) {
    return number1 + number2;
  }
};

class Division {
  cal(number1, number2) {
    return number1 / number2;
  }
};

class Multiplication {
  cal(number1, number2) {
    return number1 * number2;
  }
};

class Subtraction {
  cal(number1, number2) {
    return number1 - number2;
  }
};

let calculator = new Calculator();
let addition = new Addition();
let abc = calculator.calculate(1, 2, addition);
console.log(abc);

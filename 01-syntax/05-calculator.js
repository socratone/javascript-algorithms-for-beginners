/**
 * +, -, *, /, %에 따라 다른 값을 계산해주는 계산기를 구현하세요.
 * operator에는 '+', '-', '*', '/', '%'만 들어갑니다.
 * a와 b에는 숫자가 들어가고 이 두 숫자를 operator로 계산합니다.
 * 예를 들어 calculator('+', 1, 2)는 1 + 2가 되고 3을 return 합니다.
 * +, -, *, /, %는 모두 자바스크립트의 연산자입니다.
 */

function calculator(operator, a, b) {
  if (operator === '+') return a + b;
  if (operator === '-') return a - b;
  if (operator === '*') return a * b;
  if (operator === '/') return a / b;
  return a % b;
}

module.exports = calculator;

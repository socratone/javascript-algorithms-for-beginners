// if, +, -, *, /, %

const calculator = require('../../01-syntax/05-calculator');

it('1 + 1 = 2', () => {
  expect(calculator('+', 1, 1)).toBe(2);
});

it('4 + 8 = 12', () => {
  expect(calculator('+', 4, 8)).toBe(12);
});

it('10 - 4 = 6', () => {
  expect(calculator('-', 10, 4)).toBe(6);
});

it('2 - 7 = -5', () => {
  expect(calculator('-', 2, 7)).toBe(-5);
});

it('6 * 6 = 36', () => {
  expect(calculator('*', 6, 6)).toBe(36);
});

it('9 * -8 = -72', () => {
  expect(calculator('*', 9, -8)).toBe(-72);
});

it('48 / 2 = 24', () => {
  expect(calculator('/', 48, 2)).toBe(24);
});

it('100 / -50 = -2', () => {
  expect(calculator('/', 100, -50)).toBe(-2);
});

it('7 % 3 = 1', () => {
  expect(calculator('%', 7, 3)).toBe(1);
});

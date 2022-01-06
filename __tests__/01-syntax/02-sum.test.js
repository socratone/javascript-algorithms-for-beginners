const sum = require('../../01-syntax/02-sum');

describe('hello world', () => {
  it('1과 2를 넣었을 때 3을 return해야 합니다.', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('3과 7을 넣었을 때 10을 return해야 합니다.', () => {
    expect(sum(3, 7)).toBe(10);
  });
});

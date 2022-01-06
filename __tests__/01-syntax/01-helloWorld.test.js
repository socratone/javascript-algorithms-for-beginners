const helloWorld = require('../../01-syntax/01-helloWorld');

describe('hello world', () => {
  it("'hello word'라는 글자를 return해야 합니다.", () => {
    expect(helloWorld()).toBe('hello world');
  });
});

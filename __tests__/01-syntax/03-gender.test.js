// if, null

const gender = require('../../01-syntax/03-gender');

it("'M'을 넣었을 때 '남자'를 return 해야 합니다.", () => {
  expect(gender('M')).toBe('남자');
});

it("'F'를 넣었을 때 '여자'를 return 해야 합니다.", () => {
  expect(gender('F')).toBe('여자');
});

it('아무 것도 넣지 않았을 때 null을 return 해야 합니다.', () => {
  expect(gender()).toBe(null);
});

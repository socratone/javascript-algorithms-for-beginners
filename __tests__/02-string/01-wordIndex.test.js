// indexOf

const wordIndex = require('../../02-string/01-wordIndex');

it('0번째 오는 글자를 찾을 수 있어야 합니다.', () => {
  expect(wordIndex('가나다라', '가')).toBe(0);
});

it('1번째 오는 글자를 찾을 수 있어야 합니다.', () => {
  expect(wordIndex('가나다라', '나')).toBe(1);
});

it('2번째 오는 글자를 찾을 수 있어야 합니다.', () => {
  expect(wordIndex('가나다라', '다')).toBe(2);
});

it('3번째 오는 글자를 찾을 수 있어야 합니다.', () => {
  expect(wordIndex('가나다라', '라')).toBe(3);
});

it('글자가 없는 경우 -1을 return 해야 합니다..', () => {
  expect(wordIndex('가나다라', '마')).toBe(-1);
});

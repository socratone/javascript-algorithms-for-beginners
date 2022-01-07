// slice

const sliceString = require('../../02-string/02-sliceString');

it('글자를 정확히 잘라내야 합니다.', () => {
  expect(sliceString('가나다라마바사아자차', 0, 3)).toBe('가나다');
  expect(sliceString('가나다라마바사아자차', 1, 3)).toBe('나다');
  expect(sliceString('가나다라마바사아자차', 1, 2)).toBe('나');
  expect(sliceString('가나다라마바사아자차', 2, 3)).toBe('다');
  expect(sliceString('가나다라마바사아자차', 3, 4)).toBe('라');
  expect(sliceString('가나다라마바사아자차', 3, 5)).toBe('라마');
  expect(sliceString('가나다라마바사아자차', 3, 7)).toBe('라마바사');
  expect(sliceString('가나다라마바사아자차', 3, 9)).toBe('라마바사아자');
});

it('세 번째 인자에 값을 넣지 않으면 뒤에는 자르지 않아야 합니다.', () => {
  expect(sliceString('가나다라마바사아자차', 0)).toBe('가나다라마바사아자차');
  expect(sliceString('가나다라마바사아자차', 1)).toBe('나다라마바사아자차');
  expect(sliceString('가나다라마바사아자차', 2)).toBe('다라마바사아자차');
  expect(sliceString('가나다라마바사아자차', 3)).toBe('라마바사아자차');
  expect(sliceString('가나다라마바사아자차', 4)).toBe('마바사아자차');
  expect(sliceString('가나다라마바사아자차', 5)).toBe('바사아자차');
});

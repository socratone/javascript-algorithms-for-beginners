// for, +=

const proliferation = require('../../01-syntax/06-proliferation');

it("'가'를 넣었을 때 '가가'를 return 해야 합니다.", () => {
  expect(proliferation('가')).toBe('가가');
});

it("'가나'를 넣었을 때 '가가나나'를 return 해야 합니다.", () => {
  expect(proliferation('가나')).toBe('가가나나');
});

it("'가나다라마바사'를 넣었을 때 '가가나나다다라라마마바바사사'를 return 해야 합니다.", () => {
  expect(proliferation('가나다라마바사')).toBe('가가나나다다라라마마바바사사');
});

it("아무 것도 넣지 않았을 때 ''을 return 해야 합니다.", () => {
  expect(proliferation('')).toBe('');
});

// if, 부등호

const grade = require('../../01-syntax/04-grade');

it("100은 'A'를 return 해야 합니다.", () => {
  expect(grade(100)).toBe('A');
});

it("95는 'A'를 return 해야 합니다.", () => {
  expect(grade(95)).toBe('A');
});

it("90은 'A'를 return 해야 합니다.", () => {
  expect(grade(90)).toBe('A');
});

it("89는 'B'를 return 해야 합니다.", () => {
  expect(grade(89)).toBe('B');
});

it("80은 'B'를 return 해야 합니다.", () => {
  expect(grade(80)).toBe('B');
});

it("79는 'C'를 return 해야 합니다.", () => {
  expect(grade(79)).toBe('C');
});

it("70은 'C'를 return 해야 합니다.", () => {
  expect(grade(70)).toBe('C');
});

it("69는 'D'를 return 해야 합니다.", () => {
  expect(grade(69)).toBe('D');
});

it("40은 'D'를 return 해야 합니다.", () => {
  expect(grade(40)).toBe('D');
});

it("0은 'D'를 return 해야 합니다.", () => {
  expect(grade(0)).toBe('D');
});

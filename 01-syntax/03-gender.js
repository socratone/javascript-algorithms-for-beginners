/**
 * 'M'을 넣었을 때 '남자'를 return 하고
 * 'F'를 넣었을 때 '여자'를 return 하고
 * 아무것도 넣지 않았을 때 null을 return하는 gender 함수를 구현하세요.
 */

function gender(value) {
  if (value === 'M') return '남자';
  if (value === 'F') return '여자';
  return null;
}

module.exports = gender;

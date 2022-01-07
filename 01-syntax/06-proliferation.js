/**
 * 글자를 하나씩 늘려주는 proliferation 함수를 구현하세요.
 * for문을 사용해야 합니다.
 *
 * '가' => '가가'
 * '가나' => '가가나나'
 * '가나다라' => '가가나나다다라라'
 */

function proliferation(text) {
  let result = '';
  for (let char of text) {
    result += char;
    result += char;
  }
  return result;
}

module.exports = proliferation;

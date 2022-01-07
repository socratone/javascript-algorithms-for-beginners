/**
 * 글자를 잘라내는 sliceString 함수를 구현하세요.
 * str의 a index 앞을 자르고
 * b index를 포함하여 뒤를 자릅니다.
 *
 * 예를 들어 sliceString('가나다라', 1, 3)는
 * 1 index인 '나' 앞을 자르고
 * 3 index인 '라' 부터 뒤를 잘라
 * '나다'를 return 합니다.
 *
 * 다만 세 번째 인자에 값을 넣지 않으면 뒤를 자르지 않습니다.
 *
 * ### Advanced
 *
 * string 메소드를 쓰지 않고도 구현해보세요.
 */

function sliceString(str, a, b) {
  return str.slice(a, b);
}

module.exports = sliceString;

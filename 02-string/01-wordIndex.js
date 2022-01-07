/**
 * 한 글자인 char가 word의 몇 번째 순서에 오는지 return하는 함수를 구현하세요.
 *
 * 단 제일 첫 번째 순서는 0으로 하고
 * 없는 글자인 경우 -1을 return 합니다.
 */

function wordIndex(word, char) {
  return word.indexOf(char);
}

module.exports = wordIndex;

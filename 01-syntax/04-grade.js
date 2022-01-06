/**
 * 90점 이상이면 'A'를 return하고
 * 80점 이상이면 'B'를 return하고
 * 70점 이상이면 'C'를 return하고
 * 69점 이하면 'D'를 return하는 grade 함수를 구현하세요.
 */

function grade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  return 'D';
}

module.exports = grade;

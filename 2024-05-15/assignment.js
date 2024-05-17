// 양의 정수 n이 매개변수로 주어질 때,
// n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는
// solution 함수를 작성해 주세요.

function solution(n) {
  var a = 0;
  if (n % 2 === 1) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 1) {
        a += i;
      }
    }
  } else {
    for (let i = 2; i <= n; i++) {
      if (i % 2 === 0) {
        a += i * i;
      }
    }
  }
  return a;
}

// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다.
// 예를 들면 다음과 같습니다.
// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을
// return 하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

function solution(a, b) {
  var i = a + "" + b;
  var j = b + "" + a;
  return Math.max(i, j);
}

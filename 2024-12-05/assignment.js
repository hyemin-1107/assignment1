// 1. 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.
// [1, 2, 3, 3, 3, 4]	-> 3
// [1, 1, 2, 2]	-> -1
// [1]	-> 1

function solution(array) {
  // 1. 숫자의 등장 횟수 카운트
  const counts = array.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, {});

  // 2. 최빈값과 최대 빈도 찾기
  let maxCount = Math.max(...Object.values(counts));
  let modes = Object.keys(counts).filter((key) => counts[key] === maxCount);

  // 3. 최빈값이 여러 개면 -1, 아니면 최빈값 반환
  return modes.length > 1 ? -1 : +modes[0];
}

// 2. 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
// 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

// [1, 2]	-> 1
// [3, 6]	-> 5
// [11, 7]	-> 13

function solution(sides) {
  sides.sort((a, b) => a - b);
  let a = 0;
  for (i = 0; i <= sides[1]; i++) {
    if (i + sides[0] > sides[1]) {
      a++;
    }
  }
  for (j = sides[1] + 1; j < sides[0] + sides[1]; j++) {
    a++;
  }
  return a;
}
// sides.sort((a, b) => a - b);
// const a = sides[1] - sides[0] + 1; // 첫 번째 경우의 수
// const b = sides[0] + sides[1] - sides[1] - 1; // 두 번째 경우의 수
// return a + b;

// 3. 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
// 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록
// solution 함수를 완성해주세요.
// 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.
function solution(n) {
  var answer = 0;
  let cnt = 0;
  for (i = 1; i < n + 1; i++) {
    cnt = 0;
    for (j = 1; j < i + 1; j++) {
      if (i % j === 0) cnt += 1;
    }
    if (cnt >= 3) answer += 1;
  }
  return answer;
}

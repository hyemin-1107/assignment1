// 정수 리스트 num_list와 정수 n이 주어질 때,
// num_list의 첫 번째 원소부터 n 번째 원소까지의
// 모든 원소를 담은 리스트를 return하도록
// solution 함수를 완성해주세요.

// [2, 1, 6]	1	=>  [2]

function solution(num_list, n) {
  return num_list.slice(0, n);
}

// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를
// return하도록 solution 함수를 완성해주세요.
// 음수가 없다면 -1을 return합니다.

function solution(num_list) {
  return num_list.findIndex((i) => i < 0);
}

// 막정수 리스트 num_list와 정수 n이 주어질 때,
// n 번째 원소부터 마지 원소까지의 모든 원소를 담은 리스트를 return하도록
// solution 함수를 완성해주세요.

// [2, 1, 6]	3	= > [6]

function solution(num_list, n) {
  return num_list.slice(n - 1);
}

// 정수가 담긴 리스트 num_list가 주어집니다.
// num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인
// 수의 합을 return하도록 solution 함수를 완성해주세요.

// [3, 4, 5, 2, 1]	 = > 393
// [5, 7, 8, 3]	 = > 581

function solution(num_list) {
  let a = "";
  let b = "";

  num_list.forEach((value) => {
    if (value % 2 === 0) {
      a += value;
    } else {
      b += value;
    }
  });
  return Number(a) + Number(b);
}

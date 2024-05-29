// 정수로 이루어진 문자열 n_str이 주어질 때,
// n_str의 가장 왼쪽에 처음으로 등장하는 0들을
// 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
  return Number(n_str).toString();
}

function solution(n_str) {
  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] !== "0") return n_str.slice(i);
  }
}

// 정수 배열 arr와 자연수 k가 주어집니다.
// 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고,
// k가 짝수라면 arr의 모든 원소에 k를 더합니다.
// 이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.

function solution(arr, k) {
  let a = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (k % 2 === 1) {
      a.push(arr[i] * k);
    } else {
      a.push(arr[i] + k);
    }
  }
  return a;
}

const solution = (arr, k) => arr.map((v) => (k % 2 ? v * k : v + k));

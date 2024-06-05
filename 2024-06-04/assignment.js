// 정수 배열 arr과 delete_list가 있습니다.
// arr의 원소 중 delete_list의 원소를 모두 삭제하고 남은 원소들은
// 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.

function solution(arr, delete_list) {
  return arr.filter((a) => !delete_list.includes(a));
}

// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서
// "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는
// solution 함수를 완성해 주세요.

function solution(myString) {
  return myString.replaceAll(/[a-k]/g, "l");
}

function solution(myString) {
  return [...myString].map((v) => (v < "l" ? "l" : v)).join("");
}

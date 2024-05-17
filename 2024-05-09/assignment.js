// 정수 n과 문자열 control이 주어집니다.
// control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며,
// control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.
// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는
// solution 함수를 완성해 주세요.

function solution(n, control) {
  let answer = n;
  for (let i = 0; i < control.length; i++) {
    if (control[i] === "w") {
      answer += 1;
    }
    if (control[i] === "s") {
      answer += -1;
    }
    if (control[i] === "d") {
      answer += 10;
    }
    if (control[i] === "a") {
      answer += -10;
    }
  }
  return answer;
}

// 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다.
// my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을
// 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
// "cvsgiorszzzmrpaqpe"	[16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]	= >  "programmers"

function solution(my_string, index_list) {
  var answer = "";
  for (let i = 0; i < index_list.length; i++) {
    answer += my_string[index_list[i]];
  }
  return answer;
}

// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지
// 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start, end_num) {
  var answer = [];
  for (let i = start; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}

// 정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서
// k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(n, k) {
  var answer = [];
  for (let i = k; i <= n; i += k) answer.push(i);
  return answer;
}

// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다.
// 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때, is_prefix가
// my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, is_prefix) {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}

// 어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다.
// 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
// 문자열 my_string과 is_suffix가 주어질 때, is_suffix가
// my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, is_suffix) {
  return +my_string.endsWith(is_suffix);
}

// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터
// 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록
// solution 함수를 완성해주세요.

function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length; i += n) answer.push(num_list[i]);
  return answer;
}

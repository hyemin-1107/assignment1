// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가
// 매개변수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터
// 인덱스 e까지의 부분 문자열을 의미합니다. 각 my_strings의 원소의 parts에 해당하는
// 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는
// solution 함수를 작성해 주세요.

// ["progressive", "hamburger", "hammer", "ahocorasick"]
// [[0, 4], [1, 2], [3, 5], [7, 7]]

// "programmers"

function solution(my_strings, parts) {
  var answer = "";
  for (let i = 0; i < my_strings.length; i++) {
    answer += my_strings[i].slice(parts[i][0], parts[i][1] + 1);
  }
  return answer;
}

function solution(my_strings, parts) {
  return my_strings
    .map((v, i) => (v = v.substring(parts[i][0], parts[i][1] + 1)))
    .join("");
}

// 정수 리스트 num_list와 정수 n이 주어질 때,
// num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠
// n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를
// return하도록 solution 함수를 완성해주세요.

function solution(num_list, n) {
  return num_list.slice(n).concat(num_list.slice(0, n));
}

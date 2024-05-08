// 정수가 담긴 리스트 num_list가 주어질 때,
// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록
// solution 함수를 완성해주세요.

function solution(num_list) {
  var num1 = 1;
  var num2 = 0;
  for (var i = 0; i < num_list.length; i++) {
    num1 *= num_list[i];
    num2 += num_list[i];
  }
  return num1 < num2 ** 2 ? 1 : 0;
}

// 정수 start_num와 end_num가 주어질 때,
// start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록
// solution 함수를 완성해주세요.

function solution(start_num, end_num) {
  var answer = [];
  for (let i = start_num; i < end_num + 1; i++) {
    answer.push(i);
  }
  return answer;
}

// 정수 리스트 num_list가 주어질 때,
// 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을
// 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여
// return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
    num_list.push(
      num_list[num_list.length - 1] - num_list[num_list.length - 2]
    );
  } else {
    num_list.push(num_list[num_list.length - 1] * 2);
  }
  return num_list;
}

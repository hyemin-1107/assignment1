// 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다.
// myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는
// solution 함수를 완성해 주세요.
// 단, 알파벳 대문자와 소문자는 구분하지 않습니다.

// "AbCdEfG","aBc"	= > 1
// "aaAA","aaaaa"	= > 0

function solution(myString, pat) {
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}

// 정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때,
// 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록
// solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

// [4, 2, 6, 1, 7, 6]	= > 17
// [-1, 2, 5, 6, 3]	= > 8

function solution(num_list) {
  const even = num_list.filter((x, y) => y % 2).reduce((a, b) => a + b);
  const odd = num_list.filter((x, y) => !(y % 2)).reduce((a, b) => a + b);
  return even > odd ? even : odd;
}

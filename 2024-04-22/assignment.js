// 정수가 담긴 리스트 num_list가 주어질 때,
// 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을
// 10 이하이면 모든 원소의 곱을 return하도록
// solution 함수를 완성해주세요.

function solution(num_list) {
  if (num_list.length > 10) {
    var sum = 0;
    for (let i = 0; i < num_list.length; i++) sum += num_list[i];
  } else {
    var sum = 1;
    for (let i = 0; i < num_list.length; i++) sum *= num_list[i];
  }
  return sum;
}

function solution(num_list) {
  return num_list.length <= 10
    ? num_list.reduce((acc, cur) => acc * cur)
    : num_list.reduce((acc, cur) => acc + cur);
}





// reduce 배열의 요소를 순차적으로 순회하며
// 숫자든 배열이든 객체든 하나의 값으로 줄여 return 하는 함수

// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다.
// myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중
// pat이 있으면 1을 아니면 0을 return 하는
// solution 함수를 완성하세요.

// "ABBAA"	"AABB"	= > 1
// "ABAB"	"ABAB"	= > 0

function solution(myString, pat) {
  var answer = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "A") {
      answer += myString[i].replaceAll("A", "B");
    } else answer += myString[i].replaceAll("B", "A");
  }
  return answer.includes(pat) ? 1 : 0;
}

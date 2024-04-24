// 단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때,
// my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는
// solution 함수를 작성해 주세요.

// " i    love  you"	= > ["i", "love", "you"]
// "    programmers  "	= > ["programmers"]
function solution(my_string) {
  return my_string.split(" ").filter((e) => e !== "");
}

// 문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때
// 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는
// solution 함수를 완성해 주세요.

// "oxooxoxxox"	= > [1, 2, 1, 0, 1, 0]
// "xabcxdefxghi"	= > [0, 3, 3, 3]
function solution(myString) {
  var answer = [];
  myString = myString.split("x");
  for (let i = 0; i < myString.length; i++) answer.push(myString[i].length);
  return answer;
}

// 정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가
// 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는
// solution 함수를 작성해 주세요.

// [34, 5, 71, 29, 100, 34],123	= > 139
// [58, 44, 27, 10, 100],139	= > 239

function solution(numbers, n) {
  return numbers.reduce((a, c, i, t) => (a <= n ? a + c : a));
}
//.reduce()공부
function solution(numbers, n) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    if (answer > n) return answer;
  }
}

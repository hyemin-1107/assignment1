// 문자열 배열 strArr가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을
// 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여
// 배열로 return 하는 solution 함수를 완성해 주세요.

function solution(strArr) {
  var a = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].includes("ad") === false) {
      a.push(strArr[i]);
    }
  }
  return a;
}

function solution(strArr) {
  return strArr.filter((arr) => !arr.includes("ad"));
}

function solution(strArr) {
  strArr = strArr.filter((x) => {
    return x.indexOf("ad") === -1;
  });
  return strArr;
}

// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다.
// 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는
//  solution 함수를 완성해 주세요.

// 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.

function solution(a, b) {
  let i = a + "" + b;
  let j = 2 * a * b;

  return Math.max(i, j);
}

function solution(a, b) {
  const answerA = Number(a.toString() + b.toString());
  const answerB = 2 * a * b;

  return answerA > answerB ? answerA : answerB;
}

// 문자열들이 담긴 리스트가 주어졌을 때, 모든 문자열들을 순서대로 합친
// 문자열을 꼬리 문자열이라고 합니다.
// 꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다.
// 예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 문자열 "ef"를
// 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.

// 문자열 리스트 str_list와 제외하려는 문자열 ex가 주어질 때,
// str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을
// return하도록 solution 함수를 완성해주세요.

function solution(str_list, ex) {
  return str_list.filter((i) => !i.includes(ex)).join("");
}

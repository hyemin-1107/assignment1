// 문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 
// 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 
// 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

// ["AAA","BBB","CCC","DDD"] = > ["aaa","BBB","ccc","DDD"]
// ["aBc","AbC"] = > ["abc","ABC"]

function solution(strArr) {
    var answer = [];
    for (let i = 0; i < strArr.length; i++) {
        if (i % 2 === 1)
            answer.push(strArr[i].toUpperCase())
        else
            answer.push(strArr[i].toLowerCase())
    }
    return answer;
}

function solution(strArr) {
    return strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase());
}





// 문자열 myString이 주어집니다. 
// myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고,
// "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 
// solution 함수를 완성하세요.

// "abstract algebra" = > "AbstrAct AlgebrA"
// "PrOgRaMmErS" = > "progrAmmers"

function solution(myString) {
    return myString.toLowerCase().replaceAll('a','A');
}

function solution(myString) {
    return [...myString].map(e => e == 'a' || e == "A" ? "A" : e.toLowerCase()).join("");
}
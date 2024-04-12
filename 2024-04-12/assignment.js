// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 
// (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 
// 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 
// solution 함수를 완성해주세요.

function solution(n) {
    var answer = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0)
            answer += [i].length;
        // answer++
    }
    return answer;
}





// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 
// 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 
// solution 함수를 완성해주세요.

function solution(sides) {
    sides.sort((a, b) => a - b);
    if (sides[0] + sides[1] > sides[2]) {
        return 1;
    } else {
        return 2;
    }
}

function solution(sides) {
    sides.sort((a, b) => a - b);
    return sides[0] + sides[1] > sides[2] ? 1 : 2;
}





// 문자열 my_string이 매개변수로 주어질 때, 
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 
// solution 함수를 작성해보세요.
// "hi12392"	[1, 2, 2, 3, 9]
// "p2o4i8gj2"	[2, 2, 4, 8]
// "abcde0"	    [0]

function solution(my_string) {
    return my_string.replace(/[a-z]/g,'').split('').map(Number).sort((a,b)=>a-b)
}
//.replace(/[a-z]/g,'') 정규표현식
//.split('').map(Number) 문자열을 숫자로 변환
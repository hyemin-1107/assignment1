// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 
// return하도록 solution 함수를 완성해주세요.

// 제한사항
// my_string은 소문자와 공백으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000

function solution(my_string) {
    const i = my_string.replaceAll('a', '').replaceAll('e', '')
    .replaceAll('i', '').replaceAll('o', '').replaceAll('u', '');
     return i;
}

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}





// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 
// return 하도록 solution 함수를 완성해보세요.

function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2+1);
}





// 문자열 str1, str2가 매개변수로 주어집니다. 
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 
// solution 함수를 완성해주세요.

function solution(str1, str2) {
    if(str1.includes(str2)){
        return 1;
    }else{
        return 2;
    }
}

function solution(str1, str2) {
return str1.includes(str2) ? 1 : 2; 
}





// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 
// 정수 n이 매개변수로 주어질 때, 
// n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
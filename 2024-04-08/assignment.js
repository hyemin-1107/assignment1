// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 
// 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 
// 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 
// solution 함수를 완성해보세요.

function solution(n, k) {
    return (n * 12000 + k * 2000) - Math.floor(n / 10) * 2000;
}





// 문자열 my_string이 매개변수로 주어집니다. 
// my_string을 거꾸로 뒤집은 문자열을 return하도록 
// solution 함수를 완성해주세요.

function solution(my_string) {
    let answer = my_string.split("").reverse().join("");
    return answer;
}





// 문자열 배열 strlist가 매개변수로 주어집니다. 
// strlist 각 원소의 길이를 담은 배열을 retrun하도록 
// solution 함수를 완성해주세요.

function solution(strlist) {
    let answer = [];
    for (let i = 0; i < strlist.length; i++) {
        let a = strlist[i].length;
        answer.push(a);
    }
    return answer;
}

function solution(strlist) {
    return strlist.map((a) => a.length);
}
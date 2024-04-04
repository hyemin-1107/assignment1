
// 머쓱이는 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 
// 2022년 기준 선생님의 나이 age가 주어질 때, 
// 선생님의 출생 연도를 return 하는 solution 함수를 완성해주세요

// 제한사항
// 0 < age ≤ 120
// 나이는 태어난 연도에 1살이며 매년 1월 1일마다 1살씩 증가합니다.
age = 40;

// function solution(age) {
//     return 2023 - age;
// }
// console.log(solution(age));
function solution(age) {
    return 2022 - age + 1;
}





// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 
// 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 
// 각 angle이 매개변수로 주어질 때 
// 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 
// return하도록 solution 함수를 완성해주세요.

// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180

// 제한사항
// 0 < angle ≤ 180
// angle은 정수입니다.

// function solution(angle) {
//     if(angle<90){
//         return 1;
//     }else if(angle===90){
//         return 2;
//     }else if(angle<180){
//         return 3;
//     }else if(angle===180){
//         return 4;
//     }
// }

function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}





// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 
// solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000

function solution(n) {
    let answer = 0;
    for(let i = 0; i <= n; i+=2){
        answer += i;
    }
   return answer;
}





// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 
// 아이스 아메리카노는 한잔에 5,500원입니다. 
// 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 
// 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 
// 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(money) {
    return [Math.floor( money / 5500 ), money % 5500];
}





// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 
// 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 
// 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 
// solution 함수를 완성해보세요.

function solution(array, height) {
    array = array.concat(height);
    array.sort((a,b)=>b-a);
    
    return array.indexOf(height);
}
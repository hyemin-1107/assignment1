// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 
// 짝수와 홀수의 개수를 담은 배열을 return 하도록 
// solution 함수를 완성해보세요.

function solution(num_list) {
    let num1 = 0;
    let num2 = 0;
    for(let i = 0; i < num_list.length; i++){
      num_list[i] % 2 === 1 ? num1++ : num2++
    };
    return [ num2, num1 ];
};





// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. 
// num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 
// solution 함수를 완성해주세요.

function solution(num_list) {
    return num_list.reverse();
}





// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, 
// array에 n이 몇 개 있는 지를 return 하도록 
// solution 함수를 완성해보세요.

function solution(array, n) {
    let answer = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === n){
            answer++;
        }
    }
    return answer;
}
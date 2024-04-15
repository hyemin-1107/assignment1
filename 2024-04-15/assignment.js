// 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 
// 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 
// 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 
// 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 
// solution 함수를 완성해주세요.

// [10, 8, 6] , 3	= > 12

function solution(box, n) {
    return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
}





// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 
// solution 함수를 완성해보세요.

// "hello"	, 1 , 2	 = > "hlelo"

function solution(my_string, num1, num2) {
    let a = my_string.split("");
    let b = my_string[num1]
    let c = my_string[num2]
    a[num1] = c, a[num2] = b

    return a.join('')
}
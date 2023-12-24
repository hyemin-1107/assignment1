// assignment1

// 공배수 구하기
// 정수`number`와`n`,`m`이 주어집니다.`number`가`n`의 배수이면서`m`의 배수이면 1을 
// 아니라면 0을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 10 ≤`number`≤ 100
// 2 ≤`n`,`m`< 10

function solution(number, n, m) {
    for(var i=1; i=number; i++){
       if(i%n === 0 && i%m === 0) {
           return 1;
       }else{
           return 0;
       }
    }
}



// assignment2

// 분수의 덧셈
// 첫 번째 분수의 분자와 분모를 뜻하는numer1,denom1, 
// 두 번째 분수의 분자와 분모를 뜻하는numer2,denom2가 매개변수로 주어집니다. 
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 
// 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 입출력 예 #1
// - 1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.

// 입출력 예 #2
// - 9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.

function cal_gcd(a, b) {
    //최대공약수
		return a % b === 0 ? b : cal_gcd(b, a % b)
}

function solution(denum1, num1, denum2, num2) {
		//분자
    let denum = denum1 * num2 + denum2 * num1;
    //분모
		let num = num1 * num2;
		//최대공약수
    let gcd = cal_gcd(denum, num);
    
		//기약분수 분자 분모
    return [denum / gcd, num / gcd]
}



// assignment3

// 중앙값 구하기
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 
// 가장 중앙에 위치하는 값을 의미합니다. 
// 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열array가 매개변수로 주어질 때, 
// 중앙값을 return 하도록 solution 함수를 완성해보세요.

// - `array`의 길이는 홀수입니다.
// - 0 <`array`의 길이 < 100
// - 1,000 <`array`의 원소 < 1,000

function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
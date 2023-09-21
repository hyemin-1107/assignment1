// reverse 함수에 정수인 숫자를 인자로 받습니다.
// 그 숫자를 뒤집어서 return해주세요.

// x: 숫자
// return: 뒤집어진 숫자를 반환!

// 예들 들어,
// x: 1234
// return: 4321

// x: -1234
// return: -4321

// x: 1230
// return: 321

const x = -12320;

const reverse = (x) => {
    return parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
}
// toString = 숫자를 문자열로 변환
// split('') = 문자열을 한글자씩 잘라서 반환
// reverse = 잘린 문자열 순서를 거꾸로 출력해서 반환
// join = 다시 이어붙여서 반환

// parseInt = 문자열을 숫자로 변환
// Math.sign = Math.sign(x) 일때 x가 양수이면 1을 반환 음수이면 -1을 반환
// parseInt(x.toString().split('').reverse().join(''))만 썻을땐 항상 양수로만 반환함, 음수일경우 reverse할때 -가 맨뒤로 오기 때문에  
// 그래서 Math.sign(x)를 곱해주면 양수일땐 1을 곱하게 되고 음수일땐 -1을 곱하게 되어서 양수 음수 구분가능

console.log(reverse(x));
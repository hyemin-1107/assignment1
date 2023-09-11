// 반복적인 코드가 늘어남을 
// for문으로 대체할 수 있다.
// for (반복조건) {
// 반복조건이 맞으면 실행할 코드
//  }
let count = 1;
for (let i = 0; i <= 6; i++) {
    count = count + 1;
}
console.log(count);


const home = "대전";
const cities = ["서울", "대전", "대구", "부산", "광주", "제주도"];

for (let i = 0; i <= 5; i++) {
    if (cities[i] === home) {
        console.log("아, " + cities[i] + " 사시는군요");
    }
}

for (var i = 10; i > 7; i--);
// `i` 는 10부터 시작하여
// 7보다 클때까지 (7보다 클 동안만)
// 1씩 감소하면서 `for` 문 안의 코드를 실행합니다.
// `i` 가 10, 9, 8 으로 1씩 감소하며 `for` 문을 총 3번 반복합니다.



// Assignment 1
// findSmallestElement 함수를 구현해 주세요.
// - `findSmallestElement` 의 `arr` 인자는 숫자 값으로만 이루어진 배열입니다.
// - `arr` 의 값들 중 가장 작은 값을 리턴 해주세요.
// - 만일 `arr` 가 비어있으면 0을 리턴 해주세요.
// - 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 1이 리턴 되어야 합니다.

const arr = [20, 200, 23, 1, 3, 9];
const arr1 = [1, 500, 270, 3, 55, 0];
const arr2 = [];

// function findSmallestElement(arr){
  
// }
function findSmallestElement(arr){
    let element = arr[0];
    if(arr.length === 0){
        return 0;
    }
    for(i = 0; i < arr.length; i++){
        if(element > arr[i]){
            element = arr[i];
        }
    }
    return element;
}
console.log(findSmallestElement(arr));

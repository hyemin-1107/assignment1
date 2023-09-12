

// Array 배열
// 몇 천개의 변수를 생성하지 않고, 하나의 변수에 모든 데이터를 갖을 수 있다.
// []대괄호로 감싸져 있다.

// Assignment 1
// getElement 함수 안에 arr 변수를 선언했습니다.
// arr 변수는 배열을 할당했고요, 배열에는 다양한 데이터 타입의 요소가 들어있네요!
// 배열이 담긴 arr 변수에 접근하여 getElement 함수가  "array" 라는 문자열을 return 할 수 있도록 해주세요.

function getElement(){
  let arr = [3, [4, ["array", 9], 2+3], [0]];
//쉼표를 잘 보자 !

// [3, [4, ["array", 9], 2+3], [0]]
//  0   1                       2

// [4, ["array", 9], 2+3]
//  0   1            2

// ["array", 9]
//   0      

// return 할 코드를 작성해주세요!
    return arr[1][1][0];
}

// Assignment 2
//`addFirstAndLast` 함수에 주어진 인자 `myArray`는 숫자 값으로만 이루어진 array 입니다.
//`addFirstAndLast` 함수에 주어진 인자 `myArray` 의 첫번째 element와 
//마지막 element의 값을 더한 값을 리턴해주세요.
//만일 `myArray`에 한 개의 요소만 있다면 해당 요소의 값을 리턴해 주시고 
//요소가 없는 비어있는 array라면 0을 리턴해주세요.

const myArray = [3, 2, 5];
const myArray1 = [1];
const myArray2 = [];

function addFirstAndLast(myArray) {
    if (myArray.length) {
        return myArray[0] + myArray[myArray.length - 1];
        // 0부터 시작이니까 마지막 자리구할땐 -1을 해준다.
    }
    else if (myArray.length === 1) {
        return myArray[0];
    }
    else if (myArray.length === 0) {
        return 0;
    }
    // return myArray.length;
}
console.log(addFirstAndLast(myArray));




// 합구하기
// const num10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let summation = 0;
// num10.forEach((item) => {
//     summation += item;
// });
// document.write('forEach item : ', summation);


// const summation = num10.reduce((a,b) => (a+b));
// document.write('reduce : ', summation);
// console.log(summation);# 2023-08-10

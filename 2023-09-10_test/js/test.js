// 1. tripleNumber
// 하나의 숫자를 인자로 받아 값을 3배해서 반환하는 함수를 구현해주세요.

// 입력값 예시: 3
// 리턴값 예시: 9

// 이용되어야 하는 매개변수(parameter): num

const num = 3;
function tripleNumber(num) {
    return num * 3;
}
console.log(tripleNumber(num));



// 02. isBiggerThanFive
// 하나의 숫자를 인자로 받아
// 5보다 크면 true 아니면 false를 반환하는 함수를 구현해주세요.

// 입력값 예시: 6
// 리턴값 예시: true

// 이용되어야 하는 매개변수(parameter): num

function isBiggerThanFive(num) {
    if (num > 5) {
        return true;
    } else {
        return false;
    }
}
console.log(isBiggerThanFive(6));



// 03. introducePerson
// 인자로 사람에 대한 정보가 담긴 객체를 받습니다.
// 소개문구를 반환하는 함수를 구현해주세요.
// 입력값 예시 : { name: "김코딩", age: 20 }
// 리턴값 예시 : "반갑습니다 저는 20살 김코딩입니다."
// 이용되어야 하는 매개변수(parameter): person

const person = {
    name: "김코딩",
    age: 20
}
function introducePerson(person) {

    return "반갑습니다 저는 " + person.age + "살 " + person.name + " 입니다.";
}
console.log(introducePerson(person));



// 04. getAge
// 인자로 사람에 대한 정보가 담긴 객체를 받습니다.
// 그 중 나이를 반환하는 함수를 만들어주세요.

// 입력값 예시 : { name: 'tom', age: 30, gender: 'male' }
// 리턴값 예시 : 30
// 이용되어야 하는 매개변수(parameter): person

let person1 = {
    name: "tom",
    age: 30,
    gender: 'male'
}
function getAge(person) {
    return person.age;
}
console.log(getAge(person));



// 05. getSquares
// 각 요소가 숫자인 배열을 인자로 받습니다.
// 배열의 각 요소를 제곱하여 제곱한 숫자들만 배열로 반환하는 함수를 구현해주세요.

// 입력값 예시: [1, 2, 3]
// 리턴값 예시: [1, 4, 9]

const array = [1, 2, 3];
function getSquares() {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push(array[i] * array[i]);
    }
    return arr;
}
console.log(getSquares());



// 06. isMaleAndAdult
// 성인이면서 남자일 경우에만 true를 반환하는 함수를 구현해주세요.
// 함수는 인자를 하나 받으며 항상 아래와 같은 객체가 들어옵니다.
// 19세까지는 미성년자, 20세부터는 성인으로 가정합니다.

// 입력값 예시: { name: 'tom', age: 30, gender: 'male' }
// 출력값 예시: true

// 입력값 예시: { name: 'tom', age: 10, gender: 'male' }
// 출력값 예시: false
// 이용되어야 하는 매개변수(parameter): person

const person2 = {
    name: 'tom',
    age: 30,
    gender: 'male'
}
function isMaleAndAdult(person2) {
    if (person2.age > 19, person2.gender === 'male') {
        return true;
    } else {
        return false;
    }
}
console.log(isMaleAndAdult(person2));


// 07. getFirstThreeElements
// 아래 조건을 만족하는 함수를 구현해주세요.

// 함수는 인자를 하나 받으며 배열이 들어옵니다.
// 배열의 길이가 4이상일 때, slice를 사용하여 앞에서 3개만 잘라 반환합니다.
// 배열의 길이가 3이하일 때, "배열이 너무 짧아요!" 라는 string을 반환합니다.

// 입력값 예시: [3, 1, 5, 1, 1]
// 출력값 예시: [3, 1, 5]

// 입력값 예시: [1, 2]
// 출력값 예시: "배열이 너무 짧아요!"

const array1 = [3, 1, 5, 1, 1];
const array2 = [1, 2];
function getFirstThreeElements() {
    if (array2.length > 3) {
        return array2.slice(0, 3);
    } else {
        return "배열이 너무 짧아요!";
    }
}
console.log(getFirstThreeElements());




// 07-2. getSumOfArray
// 아래 조건을 만족하는 함수를 구현해주세요.

// 배열은 길이가 1이상이며 모든 요소가 숫자로 되어있습니다.
// 배열 모든 요소의 합을 반환하는 함수를 구현해주세요.

// 입력값 예시: [1, 2, 3]
// 출력값 예시: 6

const array3 = [1, 2, 3];
function getSumOfArray() {
    let arr = 0;
    for (let i = 0; i < array.length; i++) {
        arr += array[i];
    }
    return arr;
}
console.log(getSumOfArray());




// 08. getPeopleWithAdult
// 배열에서 성인임을 알려주는 adult 프로퍼티를 추가해주세요.
// 함수는 인자로 객체가 요소인 배열을 받습니다.
// 배열의 요소는 각 사람에 대한 객체이며 아래는 배열의 예시입니다.
// 19세까지는 미성년자, 20세부터는 성인으로 가정합니다.

// 입력값 예시 : [
// { name: 'tom', age: 10, gender: 'male' },
// { name: 'sera', age: 30, gender: 'female' },
// ]
// 리턴값 예시 : [
// { name: 'tom', age: 10, gender: 'male', adult: false },
// { name: 'sera', age: 30, gender: 'female', adult: true },
// ]

const person3 = [
    {
        name: 'tom',
        age: 10,
        gender: 'male'
    },
    {
        name: 'sera',
        age: 30,
        gender: 'female'
    },
]
getPeopleWithAdult = (person3) => {
    for(let i = 0; i < person3.length; i++){
    if( person3[i].age < 20 ){
        person3[i].adulte = false
    }else{
        person3[i].adulte = true
    }
};
    return person3;
}
console.log(getPeopleWithAdult(person3));
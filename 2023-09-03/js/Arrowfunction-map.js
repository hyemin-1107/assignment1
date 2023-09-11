// 변수로 프로퍼티 접근할땐 항상 대괄호
// let name = '키';
// console.log(difficult[name]);



// Assignment 1
// ### `getAnswer` 함수를 구현해 주세요.
// - `getAnswer` 함수는 아래의 객체에서 '샐러드' 라는 값을 출력합니다.
let myProfile = {
    name: '김개발',
    address: {
        email: 'geabal@gmail.com',
        home: '위워크'
    },
    'my favorite': {
        food: [{
            name: '샐러드',
            price: 3500
        }, {
            name: '삼겹살',
            price: 15000
        }],
        hobby: ['축구']
    }
}
function getAnswer() {
    return myProfile['my favorite'].food[0].name;
}
console.log(getAnswer());


// ES는 ECMA Script의 줄임말
// ECMA Script는 JavaScript를 표준화 시키려고 탄생

//ES5
// function() {}
//ES6
// () => {}

//ES5
// function getName() {}
//ES6
// const getName = () => {}



// Assignment 2
// ### 1. function 키워드를 사용하여 표현된 welcome 함수를, 화살표 함수 표현으로 바꿔주세요.
// ### 2. 이후, 화살표 함수로 표현된 handleBio 함수를, function 키워드를 사용하여 표현된 함수로 바꿔주세요.

// function 사용
// function welcome(name) {
    // return "안녕하세요" + name
// }
// 
// 아래에서 변환해주세요!
const welcome = (name) => {
    return "안녕하세요" + name
}


// ES6
// const handleBio = (nickname, bio) => {
    // const user = {
        // nickname: nickname,
        // bio: bio,
    // }
    // return user;
// }

  // 아래에서 변환해주세요!
function handleBio(nickname,bio){
    const user = {
        nickname: nickname,
        bio: bio,
    }
    return user;
}



// arrow function을 가장 많이 사용할 때는 callback 함수로 사용할 때
// callback 함수란, 인자로 전달되는 함수
// array의 반복문으로 사용되는 map, forEach 메서드

// let idxOfC = -1;
// let arr = ['a', 'b', 'c', 'd'];

// arr.forEach((el, idx) => {
//   if (el === 'c') {
//     idxOfC = idx;
//     return;
//   }
// });
// console.log(idxOfC);
// 2



// Assignment 3
// > 두 문제 모두 map 메서드와 arrow function을 사용해주세요.
// moreThan100 함수를 구현해 주세요.
// - 숫자로 구성된 배열을 인자로 받습니다.
// - 100 보다 크거나 같으면, `true` 를
// - 100 보다 작으면 `false` 로 요소를 변경하여, 새로운 배열을 return 해주세요.
// - 예를 들어,
// nums(input)가
// [100, 9, 30, 7]
// 이라면
// return은
// [true, false, false, false]

const arr = [100, 9, 30, 7, 101, 160];

// const moreThan100 = (arr) => {
//     let num = [];
//     arr.map((arr) => {
//         if(arr > 100 && arr === 100){
//             num.push('true');
//         }else if(arr < 100){
//             num.push('false');
//         }
//     })
//     return moreThan100;
// }
// console.log(moreThan100);


// const moreThan100 = arr.map(arr => arr >= 100)

// console.log(moreThan100);



// Assignment 4
// formatDate 함수를 구현해 주세요.
// - 날짜가 담긴 배열을 인자로 받습니다.
// - 날짜의 data type은 string이며, 보내는 날짜 타입은 'YYYY-MM-DD' 입니다.
// - 해당 날짜의 형식을 'YYYY년 MM월 DD일' 로 바꿔서, 새로운 배열을 return 해주세요.
// - 예를 들어,
// dates(input)가
// ['2019-03-21', '2019-04-21', '2019-05-21']
// 이라면
// return은
// ['2019년 03월 21일', '2019년 04월 21일', '2019년 05월 21일']

const Dates = ['2019-03-21', '2019-04-21', '2019-05-21'];

const date = Dates[0];

// const dateStringArray = date.split('-');

// const dateFormated = dateStringArray[0] + '년' + dateStringArray[1] + '월' + dateStringArray[2] + '일'


const formatDate = (Dates) => {

    let formatedDatesArray = []

    Dates.map((date) => {
        const dateStringArray = date.split('-');
        const dateformated = dateStringArray[0] + '년' + dateStringArray[1] + '월' + dateStringArray[2] + '일';
        formatedDatesArray.push(dateformated);
    })
    return formatedDatesArray;
};
console.log(formatDate(Dates));

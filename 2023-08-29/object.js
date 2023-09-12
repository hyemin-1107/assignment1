// object(객체) 
// key값과 value값을 쌍으로 이루어져 있고, 배열과는 다르게 순서가 중요하지 않다.
// key값을 알면 접근할 수 있다.


// Assignment 1
// myself라는 이름의 객체가 있습니다.
// 본인의 이름, 혈액형, mbti, 좋아하는 커피를 토대로 객체를 만들어보세요!
// - key 값으로는 name, bloodType, mbti, favoriteCoffee를 입력해주세요!

function iAmGround() {
    let myself = {
        name: '박혜민',
        bloodType: 'B형',
        mbti: 'INFP',
        favoriteCoffee: '아메리카노'
    }
    return myself;
}



// Assignment 2
// - dotNotation 함수를 작성해주세요.
// - 마침표 연산자( . )를 사용하여 객체의 property 값에 접근해주세요.
// - 변수 hatValue의 값으로 "hat" property의 value값을 할당해주세요.
// - 변수 shirtValue의 값으로 "shirt" property의 value값을 할당해주세요.

function dotNotaion() {
    // 아래의 코드는 수정하지 마세요.
    let testObj = {
        "hat": "ballcap",
        "shirt": "jersey",
        "shoes": "cleats"
    };

    // 아래의 코드를 수정해주세요.
    let hatValue = testObj.hat;
    let shirtValue = testObj.shirt;

    // 아래의 코드는 수정하지 마세요.
    return hatValue + ' ' + shirtValue
}
console.log(dotNotaion());



// Assignment 3
// - bracketNotation 함수를 작성해주세요.
// - 대괄호([])를 사용하여 객체의 property 값에 접근해주세요.
// - 변수 entreeValue의 값으로 "an entree" property의 value값을 할당해주세요.
// - 변수 drinkValue의 값으로 "the drink" property의 value값을 할당해주세요.

function bracketNotation() {
    // 아래의 코드는 수정하지 마세요.
    let testObj = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
    };

    // 아래의 코드를 수정해주세요.
    let entreeValue = testObj["an entree"];
    let drinkValue = testObj["the drink"];

    // 아래의 코드는 수정하지 마세요.
    return entreeValue + ' ' + drinkValue;
}
console.log(bracketNotation());



// Assignment 4
// - objectVariables 함수를 작성해주세요.
// - 16을 값으로 하는 playerNumber 변수를 선언해주세요.
// - 대괄호를 사용해 testObj의 playerNumber 프로퍼티에 접근하여 player 변수의 값으로 해당 번호의 선수가 올 수 있게 해주세요.

function objectVariables() {
    // 아래의 코드는 수정하지 마세요.
    let testObj = {
        12: "Namath",
        16: "Montana",
        19: "Unitas"
    };

    let playerNumber = 16;
    // 아래의 코드를 수정해주세요.
    // let player = testObj[16];  
    let player = testObj[playerNumber];

    return player;
}
console.log(objectVariables());



// Assignment 5
// - updateObject 함수를 작성해주세요.
// - myDog 객체의 "name" property를 업데이트해주세요.
// - "name" key의 값을 "Coder"에서 "Happy Coder"로 바꿔주세요.
// - dot notation / bracket notation 둘 중 아무거나 사용해도됩니다.

function updateObject() {
    // 아래의 코드는 수정하지 마세요.
    let myDog = {
        "name": "Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["freeCodeCamp Campers"]
    };

    // 아래에 코드를 작성해주세요.
    myDog.name = "Happy Coder"

    // 아래의 코드는 수정하지 마세요.
    return myDog.name;
}
console.log(updateObject());
// module.exports = { updateObject };



// Assignment6
// - addProperty 함수를 작성해주세요.
// - myDog 객체에 "bark" 프로퍼티를 추가해주세요.
// - "bark" 프로퍼티는 "woof"라는 값을 갖습니다.

function addProperty() {
    // 아래의 코드는 수정하지마세요.
    let myDog = {
        "name": "Happy Coder",
        "legs": 4,
        "tails": 1,
        "friends": ["Wecode Bootcamp"]
    };

    // 아래에 코드를 작성해주세요.
    myDog.bark = "woof"

    // 아래의 코드는 수정하지마세요.
    return myDog;
}
console.log(addProperty());




// let plan1 = {
//     name: "Basic"
//   };

//   console.log(plan1.name);
//   console.log(plan1["name"]);

let myObj = {
    property1: "hello",
    property2: [1, 2, 3, 4, 5],
    property3: {
        childproperty: "haha"
    }
};

// let name = "property";
let name = "property1";
// console.log(myObj[name + "1"]);
// console.log(myObj[name + "2"]);
// console.log(myObj[name + "3"]);
// console.log(myObj[name + "3"]["child" + name]);

// console.log(myObj.property1);
// console.log(myObj.property2);
// console.log(myObj.property3);
// console.log(myObj.property3.childproperty);
myObj.property3.siblingproperty = [3, 6, 9];
// console.log(myObj);

myObj[name] = ["hi", "hello"];

console.log(myObj);



// Assignment 7
// 이제까지 하셨던 Assignment 와는 조금 다른 유형입니다.
// 그 동안에는 특정값을 구해서 리턴 했다면, 이번에는 인자로 받은 데이터를 조합해서, 구조를 바꿔서 리턴합니다.

// ### getData 함수를 구현해주세요!

// - **`getData` 함수는 세 개의 배열을 인자로 받습니다.**
//     - `salesArr` : 날짜별 판매량
//         - ex) `[["20190401", 34], ["20190402", 23], ["20190403", 29]]`
//     - `reviewArr` : 날짜별 리뷰수
//         - ex) `[["20190328", 3], ["20190401", 0], ["20190403", 1]]`
//     - `likeArr` : 날짜별 좋아요수
//         - ex) `[["20190328", 98], ["20190401", 102], ["20190403", 125]]`
// - **다음 요구사항을 충족하는 객체를 만들어서 return 해주세요.**
// - 리턴되는 객체는 아래와 같이 3개의 property를 가집니다.
//     - `sumAmount` : 총 판매량
//     - `sumReview` : 총 리뷰개수
//     - `sumLike` : 총 좋아요수
// - 위의 예시대로 input이 온다면,
// ret
// {
// 	sumAmount: 86 // 34 + 23 + 29,
// 	sumReview : 4 // 3 + 0 + 1,
// 	sumLike : 305 // 98 + 102 + 125 
// }
// 로 나와야 합니다.

const salesArr = [["20190401", 34], ["20190402", 23],["20190403", 29]];
const reviewArr = [["20190328", 3], ["20190401", 0], ["20190403", 1]];
const likeArr = [["20190328", 98], ["20190401", 102], ["20190403", 125]];

// function getData(salesArr, reviewArr, likeArr) {
//     let sumAmount = 0;
//     let sumReview = 0;
//     let sumLike = 0;

//     for (let i = 0; i < salesArr.length; i++) {
//         sumAmount += salesArr[i][1];
//     }
//     for (let i = 0; i < reviewArr.length; i++) {
//         sumReview += reviewArr[i][1];
//     }
//     for (let i = 0; i < likeArr.length; i++) {
//         sumLike += likeArr[i][1];
//     }
//     let temp = {
//         sumAmount,
//         sumReview,
//         sumLike
//     };
//     return temp;
// }
// console.log(getData(salesArr, reviewArr, likeArr));

function getData(salesArr, reviewArr, likeArr) {

    const sumHandle = (Arr) => {
        let sum = 0;
        for (let i = 0; i < Arr.length; i++) {
            sum += Arr[i][1];
        }
        return sum;
    }
    sumAmount = sumHandle(salesArr);
    sumReview = sumHandle(reviewArr);
    sumLike = sumHandle(likeArr);

    const temp = {
        sumAmount,
        sumReview,
        sumLike
    };
    return temp;
}
console.log(getData(salesArr, reviewArr, likeArr));

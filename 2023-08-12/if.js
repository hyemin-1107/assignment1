// 만약에 ~하면 ~한다.

// const answer = 4 + 3;
// if (answer > 5){
//     alert("5보다 큰 숫자! ");
// }
// if옆에 ()의 조건이 맞으면 {}가 실행된다.
const answer = 4 + 3;
if (answer > 5){
    alert("5보다 큰 숫자! ");
} else {
    alert("5보다 작은 숫자!");
}

// else문은 위의 if 문의 조건이 false일 경우 실행된다.
// 같은 코드에 if문을 추가하려면 else if 추가해서 작성한다. 마지막은 else문
// const answer = 4 + 3;
// if (answer > 5){
//     alert("5보다 큰 숫자! ");
// }else if (answer > 5){
//     alert("5보다 작은 숫자!");
// }else if (answer > 5){
//     alert("5보다 작은 숫자!");
// }else {
//     alert("5보다 작은 숫자!");
// }

// !==는 '엄격하게 같지 않다'
// ===는 '엄격하게 같다'
// >=는 '크거나 같다'
// <=는 '작거나 같다'


// Assignment1
// - `myFavoriteColor` 함수는 `"색깔"`을 인자로 받고 3가지 결과 값을 리턴합니다.
// - if문을 사용해 다음 조건에 맞게 함수를 구현 해주세요.
//     - `color` 가 `"navy"` 이면 `"Good!"` 리턴
//     - `color` 가 `"yellow"` 이면 `"Bad!"` 리턴
//     - 그 외의 경우 `"Whatever!"` 리턴

function myFavoriteColor(color){
    if (color === "navy") {
        return "Good!";
    }
    else if (color === "yellow") {
        return "Bad!";
    }
    else {
        return "Whatever!";
    }
}
// let myFavoriteColor = prompt('my Favorite Color?')
//     if( myFavoriteColor == 'navy' ){
//         alert('Good!');
//     }
//     if( myFavoriteColor == 'yellow' ){
//         alert('Bad!');
//     }
//     else{
//         alert('Whatever!');
//     }


// Assignment2
// - 우리나라는 20살 부터 술을 마실 수 있습니다. 우리나라 사람들이 가장 즐겨마시는 술은 소주 입니다.
// - canIDrinkSoju 함수 안에 비교 연산자를 사용하여 다음의 경우들이 구현될 수 있도록 해주세요.
//     - age 가 20살 보다 어리면: "애야 가서 공부나 해라!" 리턴
//     - age 가 50살 이상이면: "건강을 위해서 술은 적당히 마시세요!" 리턴
//     - 그 외의 경우에는: "소주에는 곱창 어떠신가요?" 리턴

function canIDrinkSoju(age){
    if(age < 20){
        return "애야 가서 공부나 해라!";
    }
    else if(age > 50){
        return "건강을 위해서 술은 적당히 마시세요!";
    }
    else{
        return "소주에는 곱창 어떠신가요?";
    }
}
// let canIDrinkSoju = prompt('우리나라는 20살 부터 술을 마실 수 있습니다. 실례지만 나이가..?')
//     if( canIDrinkSoju < 20 ){
//         alert('애야 가서 공부나 해라!');}
//     if( canIDrinkSoju > 19 , canIDrinkSoju < 50 ){
//         alert('소주에는 곱창 어떠신가요?');}
//     else{
//         alert('건강을 위해서 술은 적당히 마시세요!');
//     }

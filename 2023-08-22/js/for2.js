// Assingment 1 
// forLoops() 함수를 작성해주세요.
// for문을 사용하여 myArray 배열에 1부터 5까지의 숫자가 요소로 포함될 수 있도록 해주세요.
// Assignment1 - 다음 함수 안에 코드를 작성하시면 됩니다
function forLoops(){
  // 아래의 코드를 수정하지 마세요.
  let myArray = [];
  
  // 아래에 코드를 작성해주세요
//   for(let i = 1; i <= 5; i++){
//     myArray.push(i);  // 배열의 끝에 요소를 추가
//   }
    for(let i = 1; i <= 5; i++){
        myArray.push(i);
    }
   // unshift(i);  배열의 앞쪽에 요소를 추가 
  return myArray;
}
console.log(forLoops());



// Assingment 2
// 각 함수식에 원하는 결과값이 나올 수 있도록 for문을 작성해주세요!
// 1~30까지의 숫자 중에 addEvenNumber 함수는 짝수만을 result 배열에 담아 리턴하고, addOddNumber 함수는 홀수만을 result 배열에 담아 리턴합니다.
// i가 2씩 증가하도록 증감식을 잘 설정해주세요!

function addEvenNumber(){
  let eventNumberArray = [];
  // 여기에 식을 작성해주세요!

  for(let i = 2; i <= 30; i+= 2) {
    eventNumberArray.push(i);
    // result 배열안에 짝수가 들어가야 합니다.
  }
  return eventNumberArray
}
console.log(addEvenNumber());


function addOddNumber() {
  let  oddNumberArray  = [];
  // 여기에 식을 작성해주세요!
  
  for(let i = 1; i <= 30; i+= 2) {
    oddNumberArray.push(i);
    // result 배열안에 홀수가 들어가야 합니다.
  }
  return oddNumberArray 
}
console.log(addOddNumber());



// Assingment 3
// for문을 사용하여 1부터 9까지의 숫자 중에 홀수인 숫자를 myArray 배열에 순서대로 추가해주세요.

function forLoop() {
  
  let myArray = [];
  // 아래에 코드를 작성해주세요
  for(let i = 1; i <= 9; i+= 2) {
    myArray.push(i);
  }
  return myArray
}
console.log(forLoop());



// Assignment 4
// 9부터 1까지의 숫자 중에서 홀수인 숫자들을 큰 순서대로 앞에서부터 myArray에 포함시켜주세요.

function arrayForLoops() {
  // 아래의 코드를 수정하지 마세요.
  let myArray = [];

  // 아래에 코드를 작성해주세요
  for(let i = 9; i >= 1; i-=2){
    myArray.push(i);  
  }
  return myArray;
}
console.log(arrayForLoops());



// Assignment 5
// for문을 사용하여 getAllLetters 함수를 작성하세요.
// 단어(str 인자)가 주어졌을 때 함수의 리턴값은 주어진 단어를 구성하는 모든 문자를 담고 있는 배열입니다.
// 만약 빈 문자열이 주어졌다면, 빈 배열을 반환해야 합니다.

function getAllLetters(str){
    // 아래의 코드를 수정하지 마세요.
    let strArray = [];
    
    // 아래에 코드를 작성해주세요.
    for(let i = 0; i < str.length; i++){
        strArray.push(str[i]);
    }
    return strArray;
}
const str = 'hello,world!';
console.log(getAllLetters(str));



// Assignment 6
// 여러분은 IT 컨퍼런스의 주최자가 되었습니다. 행사장에 들어오는 사람에게 자동으로 인사해주는 인사봇을 만드려고 합니다.
// 처음 보는 사람은 숫자 0으로, 한번 봤던 사람은 숫자 1로 표기된 배열이 준비되어 있습니다.
// 처음 보는 사람에게는 '안녕하세요' 라는 인사를, 한번 봤던 사람에게는 '또 만나네요'라는 인삿말을 남기려고 합니다.
// helloBot이라는 함수를 만들어주세요.
// for문을 사용하여 빈 result배열에 greetings에 들어있는 인삿말을 채워주세요.
// 인자에는 0과 1로 이루어진 배열이 들어갑니다
// Assignment6 - 다음 함수 안에 코드를 작성하시면 됩니다.

function helloBot(people) {
  let hello = [];
	for(let i = 0; i < people.length; i++){
	 if(people[i] === 0){
    hello.push('안녕하세요');
   }
   else if(people[i] === 1){
    hello.push('또 만나네요');
   }
  }
  return hello;
}

const group1 = [0,1,1,0,0]
const group2 = [0,1,1,0,0,1,1,1,0,0,0,0,1]

console.log(helloBot(group1));
// ['안녕하세요', '또 만나네요', '또 만나네요', '안녕하세요', '안녕하세요',]
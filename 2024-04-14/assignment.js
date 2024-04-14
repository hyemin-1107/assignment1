// 문자열 my_string이 매개변수로 주어집니다. 
// my_string안의 모든 자연수들의 합을 return하도록 
// solution 함수를 완성해주세요.

// "aAb1B2cC34oOp"	 = >  10

function solution(my_string) {
    let a = 0;
    my_string = my_string.replace(/[a-z]/gi, '').split('').map(Number);
    for (let i = 0; i < my_string.length; i++) {
        a += my_string[i];
    }
    return a
}

function solution(my_string) {
    return [...my_string].reduce((acc, cur) => Number(cur) ? +acc + +cur : acc, 0)
}

//문자열 전개 연산자





// 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 
// 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 
// 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 
// solution 함수를 완성해주세요.

function solution(message) {
    let a = 0;
    for (let i = 0; i < message.length; i++) {
        a += [i].length * 2;
    }
    return a
}





// 문자열 my_string이 매개변수로 주어질 때, 
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 
// solution 함수를 완성해주세요.

// "cccCCC" = >	"CCCccc"

function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toUpperCase()) {
            answer += my_string[i].toLowerCase();
        } else
            answer += my_string[i].toUpperCase();
    }
    return answer;
}

function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        my_string[i] === my_string[i].toUpperCase()
            ? answer += my_string[i].toLowerCase() : answer += my_string[i].toUpperCase();
    }
    return answer;
}






// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

// 암호화된 문자열 cipher를 주고받습니다.
// 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 
// solution 함수를 완성해주세요.

// "dfjardstddetckdaccccdegk" , 4	= >  "attack"

function solution(cipher, code) {
    var answer = '';
    cipher = cipher.substr(code - 1);
    for (let i = 0; i < cipher.length; i++) {
        if ([i] % code)
            answer += cipher[i]
    }
    return answer;
}
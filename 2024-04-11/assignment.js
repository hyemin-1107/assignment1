// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 
// 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 
// solution 함수를 완성해보세요.

function solution(price) {
    if (price >= 100000 && price < 300000) {
        return Math.floor((price * .95))
    } if (price >= 300000 && price < 500000) {
        return Math.floor((price * .9))
    } if (price >= 500000) {
        return Math.floor((price * .8))
    } else {
        return price
    }
}





// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
// my_string에서 letter를 제거한 문자열을 return하도록 
// solution 함수를 완성해주세요.

function solution(my_string, letter) {
    var answer = my_string.replaceAll(letter, '');
    return answer;
}





// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 
// 두 개를 곱해 만들 수 있는 최댓값을 return하도록 
// solution 함수를 완성해주세요.

function solution(numbers) {
    var answer = numbers.sort((a, b) => b - a);
    var num = answer[0] * answer[1];
    return num;
}

function solution(numbers) {
    var [a, b] = numbers.sort((a, b) => b - a);
    return a * b
}





// 문자열 my_string과 정수 n이 매개변수로 주어질 때, 
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 
// solution 함수를 완성해보세요.

function solution(my_string, n) {
    let answer = ''
    for (let i = 0; i < my_string.length; i++) {
        answer += my_string[i].repeat(n);
    }
    return answer;
}





// 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 
// 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 
// 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 
// 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 
// 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 
// 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 
// 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 
// 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

function solution(hp) {
    let x = 5;
    let y = 3;
    let z = 1;
    return Math.floor(hp / x) + Math.floor(hp % x / y) + hp % x % y;
}





// 가위는 2 바위는 0 보는 5로 표현합니다. 
// 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, 
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 
// 순서대로 나타낸 문자열을 return하도록 
// solution 함수를 완성해보세요.

function solution(rsp) {
    let x = '';
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === '2') {
            x += '0';
        } else if (rsp[i] === '0') {
            x += '5';
        } else if (rsp[i] === '5') {
            x += '2';
        }
    }
    return x;
}

function solution(rsp) {
    var answer = '';
    for (let i of rsp) {
        answer += i == 2 ? '0' : i == '0' ? '5' : '2'
    }
    return answer;
}
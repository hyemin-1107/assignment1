// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 
// solution 함수를 완성해주세요.

function solution(s1, s2) {
    return s1.filter(x => s2.includes(x)).length
}

//교집합 구하기
//차집합 = > s1.filter(x => !s2.includes(x))





// 정수 배열 array가 매개변수로 주어질 때, 
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 
// solution 함수를 완성해보세요.
// 
// [1, 8, 3] = > [8, 1]

function solution(array) {
    // let max = Math.max.apply(null,array)
    // let index = array.indexOf(max)
    return [Math.max.apply(null, array), array.indexOf(Math.max.apply(null, array))];
}






// 정수 n이 매개변수로 주어질 때 
// n의 각 자리 숫자의 합을 return하도록 
// solution 함수를 완성해주세요

// 1234 = > 10

function solution(n) {
    let a = 0;
    //문자열로 변환, 하나씩 쪼개기, 숫자로 변환
    var answer = String(n).split('').map(Number);
    for (let i = 0; i < answer.length; i++) {
        a += answer[i]
    }
    return a;
}





// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 
// 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 
// solution 함수를 완성해주세요.

// 7,15 = > 229,376

function solution(n, t) {

    for (let i = 0; i < t; i++) {
        n *= 2
    }

    return n;

    // return n*(2**t)
}






// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, 
// numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 
// solution 함수를 완성해주세요.

// 3 , [4, 5, 6, 7, 8, 9, 10, 11, 12]	= >  [6, 9, 12]

function solution(n, numlist) {
    var answer = [];
    for (let i = 0; i < numlist.length; i++) {
        if (numlist[i] % n === 0)
            answer.push(numlist[i])
    }
    return answer;
}





// 'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 
// 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 
// solution 함수를 작성해 주세요.

// "masterpiece"  = >  "rnasterpiece"

function solution(rny_string) {
    return rny_string.replaceAll('m', 'rn');
}

//특정 문자열 변환





// 정수로 이루어진 리스트 num_list가 주어집니다. 
// num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 
// solution 함수를 완성해주세요.

// [12, 4, 15, 46, 38, 1, 14, 56, 32, 10] = > [15, 32, 38, 46, 56]

function solution(num_list) {
    return num_list.sort((a, b) => a - b).slice(5);
}

//배열 정렬, 자르기





// 정수 배열 arr과 정수 n이 매개변수로 주어집니다. 
// arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, 
// arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 
// solution 함수를 작성해 주세요.

// [49, 12, 100, 276, 33],27 = > [76, 12, 127, 276, 60]
// [444, 555, 666, 777],100 = > [444, 655, 666, 877]

function solution(arr, n) {
    if (arr.length % 2 === 0) {
        return arr.map((x, y) => y % 2 === 1 ? x + n : x)
    } else {
        return arr.map((x, y) => y % 2 === 0 ? x + n : x)
    }
}

const solution = (arr, n) => arr.map((num, idx) => (
    arr.length % 2 !== idx % 2
        ? num + n
        : num
))

// 이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

// 두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
// 배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 
// 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
// 두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 
// 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 
// 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.

// [49, 13],[70, 11, 2]	 = > -1
// [100, 17, 84, 1],[55, 12, 65, 36] = > 1
// [1, 2, 3, 4, 5],[3, 3, 3, 3, 3]	= > 0

function solution(arr1, arr2) {
    let a = 0;
    let b = 0;
    arr1.forEach(x => { a += x })
    arr2.forEach(y => { b += y })
    if (arr1.length < arr2.length) {
        return -1
    } if (arr1.length === arr2.length) {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        } else {
            return 0
        }
    } else {
        return 1
    }
}





// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 
// 양의 정수 배열 arr가 매개변수로 주어질 때, 
// arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 
// X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 
// solution 함수를 작성해 주세요.

// [5, 1, 4] = > [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
// [6, 6]	= > [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]

function solution(arr) {
    var answer = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j <= arr[i]; j++) {
            answer.push(arr[i]);
        }
    }
    return answer;
}
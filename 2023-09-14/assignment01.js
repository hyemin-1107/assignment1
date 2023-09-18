
// twoSum 함수에 숫자배열과 특정 수를 인자로 넘기면,
// 더해서 '특정 수'가 나오는 index를 배열에 담아 return해 주세요.

const nums = [10, 15, 34, 82];
const target = 92;
const twoSum = (nums) => {
// for문 안에 for문
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
// 서로 다른 두개의 값을 더한 수 === target
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
console.log(twoSum(nums));
// (2) [0, 3]
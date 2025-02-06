// 머쓱이는 구슬을 친구들에게 나누어주려고 합니다.
// 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게
// 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의
// 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

// balls  share	 result
// 3	  2	     3
// 5	  3	     10

function solution(balls, share) {
  // 조합 계산을 효율적으로 하는 함수
  let numerator = 1; // 분자
  let denominator = 1; // 분모

  // share가 balls - share보다 더 작은 값일 때 더 효율적
  if (share > balls - share) {
    share = balls - share;
  }

  // (balls! / (share! * (balls - share)!))를 나누어가며 계산
  for (let i = 0; i < share; i++) {
    numerator *= balls - i;
    denominator *= i + 1;
  }

  return numerator / denominator;
}

// function solution(balls, share) {
// 팩토리얼 함수
//     function factorial(n) {
//         let result = 1;
//         for (let i = 1; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }

// 조합 계산: balls! / (share! * (balls - share)!)
//     return factorial(balls) / (factorial(share) * factorial(balls - share));
// }
